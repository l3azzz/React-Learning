import React, { Component } from "react";
class Workstu extends Component {
  render() {
    return (
      <>
        <p>App10work.js</p>
        <h1>Name : {this.props.name}</h1>
        <p>Class : {this.props.class}</p>
      </>
    );
  }
}
export default Workstu;
