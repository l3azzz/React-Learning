import React, { Component } from "react";
class Blah extends Component {
  render() {
    return (
      <>
        <h1>BLAAAH! we cann inside by using this.props {this.props.title}</h1>
        <p>{this.props.description}</p>
      </>
    );
  }
}
export default Blah;
