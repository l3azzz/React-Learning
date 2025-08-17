// Conditional props

import React from "react";
// import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            {/* <What_the_fuck color="dark">Hello World</What_the_fuck>
            <What_the_fuck color="Light">Hello World</What_the_fuck> */}
            this is the first app16.js
            <hr />
          </li>
        </ul>
      </>
    );
  }
}

// Styled-component accepts color prop and applies it

// const What_the_fuck = styled.h1`
//   font-size: 40px;
//   color: ${({ color }) => (color === "dark" ? "black":"white")};
// `;
// if statement
export default App;
