// Makin Elements Responsive

// but in styled ocmponent it's different

import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            this is the first app17.js <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;

/*
import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
      <Heading value="dark">Hello World</Heading>
    );
  }
}

const Heading = styled.h1`
  font-size: 40px;
  width: 400px;
  cursor: pointer;
  color: red;
  @media (max-width: 768px) {
    font-size: 24px; // like this like this lik this like thsi like this
  }
`;

now we can add modified Heading
by
const SubHeading =  styled(Heading) `
font-size: 30px;
`;

export default App;

*/
