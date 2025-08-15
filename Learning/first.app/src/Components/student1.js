import React, { Component } from "react";
class Student1 extends Component {
  // to convert into state
  slate = {
    students: [
      {
        name: "John Jacob",
        class: 10,
      },
      {
        name: "Jain",
        class: 10,
      },
      {
        name: "Steve",
        class: 10,
      },
    ],
  };

  render() {
    return (
      <>
        {/* <h1>Name : John Jacob</h1>
        <p>Class : 10</p>

        <h1>Name : Jane</h1>
        <p>Class : 10</p>

        <h1>Name : Steve</h1>
        <p>Class : 10</p> */}
        {/* instead of this above we use below */}
        <p>app8.js</p>
        {this.slate.students.map((stdnt) => (
          <>
            <h1>Name : {stdnt.name}</h1>
            <p>Class : {stdnt.class}</p>
          </>
        ))}

        <hr />
      </>
    );
  }
}
export default Student1;
