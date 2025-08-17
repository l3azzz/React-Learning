//  Style element using styled ocmpoonent
// using a plugin styled-components.com
// or npm install --save styled-components

import React from "react";
class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            this is the first app13.js <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;

// how does it work

//
// import React from "react";
// import styled from "styled-components";

// class App extends React.Component {
//   render() {
//     return <Heading>Hello World</Heading>;
//   }
// }

// const Heading = styled.h1`
//   font-size: 40px;
//   color: red;
// `;

// export default App;

// like this :+                 👆  backtic key inside backtic key we put styles `` backtic key
// const Heading_text = styled.h`
// font-size: 30px;
// color: red;
// `;
//  👆 var 👆  name 👆 ..   👆  which element

// then we put <Heading_text> inside which elements land they have the properties above <Heading_text/>
// also it has a specific class "like akd-1341kas " this so it never wil be overwritten
