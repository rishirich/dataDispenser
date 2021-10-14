import React from "react";

class QueryBox extends React.Component {
    render() {
        return (
            <form name="Query Form" onSubmit={this.handleSubmit}>
                <textarea />
                <input type="submit"></input>
                <input type="reset"></input>
            </form>
        );
    }
}