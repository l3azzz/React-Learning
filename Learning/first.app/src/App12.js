// Inline style as an object
//  common inline style method

import React from "react";
class App extends React.Component {
  render() {
    return (
      // to make the inline css clearner we use styles object after render method by there we put all the styles and put it in a key
      <>
        <ul>
          <li>
            <p style={this.styles.paragraph_text}>
              this is app12.js so you big guy you're a looser
            </p>
            <p style={this.styles.paragraph_text}>
              this is app12.js second line so you big guy you're a looser
            </p>
            <hr />
          </li>
        </ul>
      </>
    );
  }
  styles = {
    paragraph_text: {
      fontWeight: 800,
      color: "green",
      background: "yellow",
      // cleaner and efficeint inline css inr eact
      // normal css right!
      // now we can use the class (paragraph_text) to get similiar properties of this
    },
  };
}

export default App;
