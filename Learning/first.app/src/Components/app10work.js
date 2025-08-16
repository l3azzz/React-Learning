import React, { Component } from "react";
// import Contentofstudent from "./contentofstudent";
import Workstu from "./app10workstu";

class App10work extends Component {
  // to convert into state
  state = {
    students: [
      {
        name: "saravan",
        class: 10,
      },
      {
        name: "monna",
        class: 10,
      },
      {
        name: "poathu",
        class: 10,
      },
    ],
  };

  renderStudents = () => {
    return (
      // here are seperate emthod like logics and more
      <>
        <p>app10.js</p>
        {this.state.students.map((student) => (
          <Workstu name={student.name} class={student.class} />
        ))}
        <hr />
      </> // by this render method becomes less
    );
  };

  render() {
    return <div>{this.renderStudents()}</div>; // return <>{/* i moved the content to above arrow function */}</>;
  }
}

export default App10work;
