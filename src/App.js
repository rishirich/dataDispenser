import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
//import QueryBox from './QueryBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QueryBox />
      </header>
    </div>
  );
}

class QueryBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      statKey: "Time Taken: ",
      statValue: null
    };
  }

  createUrl() {
    var baseUrl = "http://localhost:8090/instacart";
    baseUrl = "http://ec2-3-145-21-139.us-east-2.compute.amazonaws.com:8090/instacart";
    var endPoint = "/exec";

    var sqlQuery = document.getElementById("query-box").value;
    sqlQuery = sqlQuery.trim();

    var queryType = sqlQuery === null || sqlQuery === "" ? "select" : sqlQuery.split(" ")[0].toLowerCase();

    if(queryType === "select")
      endPoint += "Select";
    else if(queryType === "update")
      endPoint += "Update";

    var databaseChoices = document.getElementsByName("database");
    var database = "MySql";
    if(databaseChoices[1].checked)
      database = "Redshift";

    endPoint += database;
    endPoint += "Query";

    baseUrl +=endPoint;

    baseUrl = new URL(baseUrl);
    baseUrl.searchParams.append("strSql",sqlQuery);

    console.log("endpoint is " + baseUrl);
    return baseUrl;
  }

  requestType() {
    var sqlQuery = document.getElementById("query-box").value;
    sqlQuery = sqlQuery.trim();
    var queryType = sqlQuery === null || sqlQuery === "" ? "select" : sqlQuery.split(" ")[0].toLowerCase();

    if(queryType === "update" || queryType === "delete" || queryType === "insert" )
      return "post";
    return "get";
  }

  submitGetRequest(url) {
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(url)
        .then(res => {
          console.log(res);
          if(res.request.status < 300) {
            console.log("Success");
            this.setState({data: true, error: false, object: res.data, statKey: "Time Taken: ", statValue: res.data.timeTaken + " ms"});
          }
          else {
            console.log("Failed");
            this.setState({data: false, error: true, object: null});
            alert(res.data);
          }
        },(error) => {
          alert(error.message);
        });
  }

  submitPostRequest(url) {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post(url)
        .then(res => {
          console.log(res);
          if(res.request.status < 300) {
            console.log("Success");
            this.setState({data: "Success", error: false, object: null, statKey: "Rows affected: ", statValue: res.data});
          }
          else {
            console.log("Failed");
            this.setState({data: false, error: true, object: null});
            alert(res.data);
          }
        },(error) => {
          alert(error.message);
        });
  }

  handleSubmit(event) {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');

    if(this.requestType() === "get")
      this.submitGetRequest(this.createUrl().toString());
    else
      this.submitPostRequest(this.createUrl().toString());

  }

  handleReset(event) {
    console.log("Reset");
    this.setState({data: null})
  }

  renderDataPaneContent() {
    if(this.state.data === null)
      return (<p>Nothing to display</p>)
    else {
      if(this.state.error === true)
        return (<p>{this.state.data}</p>)
      else
        return (<div>{this.tableData()}</div>)
    }
  }

  tableData() {
    var responseObject = this.state.object;
    console.log(responseObject);
    if(responseObject === null)
      return (<p>Done</p>);
    var columnNames = responseObject.columnNames;
    console.log(columnNames[0]);
    return (<Table data={responseObject}/>)
  }


  render() {
    return (
        <div className="main-div">
          <div className="query-div">
            <form name="Query Form" >
              <table className="main-table">
                <tbody>
                  <tr>
                    <td><div>Database: Instacart</div></td>
                    <td><input type="radio" id="mysql" name="database" value="MySQL"/><label htmlFor="mysql">MySQL</label></td>
                    <td><input type="radio" id="redshift" name="database" value="RedShift"/><label htmlFor="redshift">RedShift</label></td>
                  </tr>
                  <tr>
                    <td colSpan={3}><textarea id="query-box" className="query-box"/></td>
                  </tr>
                  <tr>
                    <td><input className="submit" type="button" value="Fire" onClick={() => {this.handleSubmit();}}></input></td>
                    <td><input className="reset" type="reset" value="Clear" onClick={() => {this.handleReset();}}></input></td>
                    <td>{this.state.statKey} {this.state.statValue}</td>
                  </tr>
                </tbody>
              </table>
            </form>
        </div>
          <div className="table-div">
            {this.renderDataPaneContent()}
          </div>
        </div>
    );
  }
}

class Table extends React.Component {

  constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRows = this.getRows.bind(this);
    this.getRow = this.getRow.bind(this);
  }

  getHeader = function(){
    var columns = this.props.data.columnNames;
    return columns.map((column) =>  {
      return (<th className="data-table" key={column}>{column.toUpperCase()}</th>);
    });
  }

  getRows = function(){
    var rows = this.props.data;
    rows = rows.rsObjList;
    return rows.map( (row, index) => {
          return (<tr>{this.getRow(row,index)}</tr>);
        }
    )
  }

  getRow = function(row, index) {
    return row.map( (cell) => {
      return (<td className="data-table">{cell}</td>);
        }
    )
  }

  render() {
    return (
        <div>
          <table className="data-table">
            <thead>
            <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
            {this.getRows()}
            </tbody>
          </table>
        </div>
    );
  }
}

export default App;

/*
*/