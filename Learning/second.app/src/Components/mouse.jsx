// import React, { useState } from "react";

// export default function Mousemove() {
//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);
//   return (
//     <>
//       <h2>Mouse X Axis : {mouseX}</h2>
//       <h2>Mouse Y Axis : {mouseY}</h2>
//     </>
//   );
// }
// // next we need to build a container full of ..... so go to container.jsx

import React, { useState, useEffect } from "react";

export default function BgPage() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  let logMousePosition = (e) => {
    console.log("Position", e.clientX, e.clientY);
    setX(e.clientX);
    setY(e.clientY);
  };
  // above impo

  useEffect(() => {
    console.log("useEffect Called!");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Calling on unmounting state");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  // [by adding ] this we can only call this only one tiem it's above

  return (
    <h1>
      Mouse Position X:{x} Y:{y}
    </h1>
  );
}

// when we toggle the button again no need of code to work
// so it works all so error works

// USE CONTEXT

//           ┌───────────────┐
//           │App Component  │
//           └─────┬───┬─────┘
//                 │   │
//                 │   │
//     ┌──----─────┘ | └──────────┐
// ┌─────┐           |         ┌─────┐
// │  A  │           |         │  C  │
// └─────┘           |         └──┬──┘
//                   |            │
//                ┌─────┐      ┌─────┐
//                │  B  │      │  E  │
//                └──┬──┘      └──┬──┘
//                   │            │
//               ┌─────┐       ┌─────┐
//               │  D  │       │  F  │
//               └─────┘       └─────┘
//
//               FIG 1.1

// A B C components
// inside a nothing
// inside b .d
// inside c .e .f

// we can't pass a thing directly from APP COMPONENT to D
// bcuz we wanna firstly pass to C then D same for C

// NOT EFFICIENT RIGHT HARD TO HANDLE THIS ~
// SOLUTIONS IS USE CONTEXT
//
// Context provides a way to pass the data through the component tree
// without having to pass props down manually at every level

/*

passing username to inner component using text [fig 1.1]
________________________________________________________
!note there are files named component a component b.... more


+++MainFile.jsx+++

import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

_________________________________
// ============== below is tag UserContext brief a variable
Const UserContext = React.createContext();

__________________________________



function App() {
  return (
    <div>
      // <ComponentA />
      // <ComponentB />
      // <ComponentC />
      __________________________________
      instead of above code !modified!
      <UserContext.Provider value="ErumaKundiValiyan">
      // inni neara componentil poai vilikkan onnum pattila pakshey
      also we have put a a value in it 
      in this section is where we have to pass to the child for eg we pass to 3 childs
        <ComponentA />
        <ComponentB />
        <ComponentC />
      <UserContext.Provider/>

      __________________________________
    </div>
  );
}

export default App;

+++ComponentD.jsx+++

import {UserContext} from "./usr"
import React from "react";
export default function ComponentF() {
  return (
             <> 
                <UserContext.consumer>
                    {(username) => <h1>My name is {username}.<h1/>}  then we have to wrap it
                <UserContext.consumer/> it consumer the provider's value
             </>
          )



*/
