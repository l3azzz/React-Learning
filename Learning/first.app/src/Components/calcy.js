import React, { Component } from "react";
class Calc extends Component {
  calc = (a, b) => {
    return a + b;
  };
  render() {
    return (
      <>
        <h3>
          {" "}
          {this.props.a} + {this.props.b} ={" "}
          {this.calc(this.props.a, this.props.b)}
        </h3>
      </>
      //   in a {this.blah (her we do not need {curly brazes})}
    );
  }
}
export default Calc;
