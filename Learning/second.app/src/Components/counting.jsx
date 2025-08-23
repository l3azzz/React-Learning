// CONDITIONALLY RUN EFFECTS

import React, { Component } from "react";

class Counting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: "",
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidMount() {
    document.title = `Current counter value is ${this.state.counter}`;
  }

  componentDidUpdate(prevProps, prevState) {
    // instead of below this one
    if (prevState.counter !== this.state.counter) {
      document.title = `Current counter value is ${this.state.counter}`;
      // oroathavaneayum title update cheyyanam even though the counter deosn' updated
      // its not efficient
      // it updates every time not good
      // whenn etneriina char and lcicinb button
      console.log("component did update");
    }
  }

  render() {
    return (
      <div>
        <input
          className="textInputWrapper"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.incrementCounter()}>Increment</button>
      </div>
    );
  }
}

export default Counting;

// what if we wanna run effects only once

/*

useEffect(() => {
  console.log("ON MOUNTING STAGE");
});
ENTHU CHANGE AAYALUM RUN AAKUM
IT WILL ON WORK WHE ON MOUNTING

*/
