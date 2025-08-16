import React, { Component } from "react";
class Contentofstudent extends Component {
  render() {
    return (
      <>
        <p>app9.js</p>
        <h1>Name : {this.props.name}</h1>
        <p>Class : {this.props.class}</p>

        <hr />
      </>
    );
  }
}
export default Contentofstudent;
