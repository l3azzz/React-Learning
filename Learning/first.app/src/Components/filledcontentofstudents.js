import React, { Component } from "react";
import Contentofstudent from "./contentofstudent";
class Filledstudent extends Component {
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

  render() {
    return (
      <>
        <p>app9.js</p>
        {this.state.students.map((student) => (
          <>
            {/* <h1>naddme : {student.name}</h1> */}
            <Contentofstudent name={student.name} class={student.class} />
          </>
        ))}

        <hr />
      </>
    );
  }
}
export default Filledstudent;
