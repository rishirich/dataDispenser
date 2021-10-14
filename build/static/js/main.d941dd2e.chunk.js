(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),r=n(20),c=n.n(r),l=(n(25),n(4)),i=n(8),o=n(9),u=n(11),d=n(10),j=(n.p,n(26),n(3)),h=n.n(j),b=n(0);var p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={data:null},s}return Object(o.a)(n,[{key:"createUrl",value:function(){var e="http://localhost:8090/instacart",t="/exec",n=document.getElementById("query-box").value,s=null===(n=n.trim())||""===n?"select":n.split(" ")[0].toLowerCase();"select"===s?t+="Select":"update"===s&&(t+="Update");var a="MySql";return document.getElementsByName("database")[1].checked&&(a="Redshift"),t+=a,e+=t+="Query",(e=new URL(e)).searchParams.append("strSql",n),console.log("endpoint is "+e),e}},{key:"requestType",value:function(){var e=document.getElementById("query-box").value,t=null===(e=e.trim())||""===e?"select":e.split(" ")[0].toLowerCase();return"update"===t||"delete"===t||"insert"===t?"post":"get"}},{key:"submitGetRequest",value:function(e){var t=this;h.a.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",h.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",h.a.get(e).then((function(e){console.log(e),e.request.status<300?(console.log("Success"),t.setState({data:!0,error:!1,object:e.data})):(console.log("Failed"),t.setState({data:!1,error:!0,object:null}),alert(e.data))}),(function(e){alert(e.message)}))}},{key:"submitPostRequest",value:function(e){var t=this;h.a.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",h.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",h.a.post(e).then((function(e){console.log(e),e.request.status<300?(console.log("Success"),t.setState({data:"Success",error:!1,object:null})):(console.log("Failed"),t.setState({data:!1,error:!0,object:null}),alert(e.data))}),(function(e){alert(e.message)}))}},{key:"handleSubmit",value:function(e){(new Headers).append("Access-Control-Allow-Origin","*"),"get"===this.requestType()?this.submitGetRequest(this.createUrl().toString()):this.submitPostRequest(this.createUrl().toString())}},{key:"handleReset",value:function(e){console.log("Reset"),this.setState({data:null})}},{key:"renderDataPaneContent",value:function(){return null===this.state.data?Object(b.jsx)("p",{children:"Nothing to display"}):!0===this.state.error?Object(b.jsx)("p",{children:this.state.data}):Object(b.jsx)("div",{children:this.tableData()})}},{key:"tableData",value:function(){var e=this.state.object;if(console.log(e),null===e)return Object(b.jsx)("p",{children:"Done"});var t=e.columnNames;return console.log(t[0]),Object(b.jsx)(O,{data:e})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"query-div",children:[Object(b.jsx)("h2",{children:"Data Dispenser"}),Object(b.jsx)("form",{name:"Query Form",children:Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[Object(b.jsx)("input",{type:"radio",id:"mysql",name:"database",value:"MySQL"}),Object(b.jsx)("label",{htmlFor:"mysql",children:"MySQL"})]}),Object(b.jsxs)("td",{children:[Object(b.jsx)("input",{type:"radio",id:"redshift",name:"database",value:"RedShift"}),Object(b.jsx)("label",{htmlFor:"redshift",children:"RedShift"})]})]}),Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:2,children:Object(b.jsx)("textarea",{id:"query-box",className:"query-box"})})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("input",{className:"submit",type:"button",value:"Fire",onClick:function(){e.handleSubmit()}})}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{className:"reset",type:"reset",value:"Clear",onClick:function(){e.handleReset()}})})]})]})})})]}),Object(b.jsx)("div",{className:"table-div",children:this.renderDataPaneContent()})]})}}]),n}(a.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).getHeader=function(){return this.props.data.columnNames.map((function(e){return Object(b.jsx)("th",{children:e.toUpperCase()},e)}))},s.getRows=function(){var e=this,t=this.props.data;return(t=t.rsObjList).map((function(t,n){return Object(b.jsx)("tr",{children:e.getRow(t,n)})}))},s.getRow=function(e,t){return e.map((function(e){return Object(b.jsx)("td",{children:e})}))},s.getHeader=s.getHeader.bind(Object(l.a)(s)),s.getRows=s.getRows.bind(Object(l.a)(s)),s.getRow=s.getRow.bind(Object(l.a)(s)),s}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:this.getHeader()})}),Object(b.jsx)("tbody",{children:this.getRows()})]})})}}]),n}(a.a.Component),f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(p,{})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),m()}},[[46,1,2]]]);
//# sourceMappingURL=main.d941dd2e.chunk.js.map