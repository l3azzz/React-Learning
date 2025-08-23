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

// passing username to inner component using text [fig 1.1]
// ________________________________________________________
// !note there are files named component a component b.... more

// +++MainFile.jsx+++

import React from "react";

import ContextC from "./Context_C";
import ContextD from "./Context_D";

// _________________________________
// ============== below is tag UserContext brief a variable
const NameContext = React.createContext();
// t oa dd more new var
const EmailContext = React.createContext();

// __________________________________

function Contextmain() {
  return (
    <div>
      <NameContext.Provider value="Basuuuuu!">
        <EmailContext.Provider value="me@example.com">
          {/* // inni neara componentil poai vilikkan onnum pattila pakshey
        also we have put a a value in it 
        in this section is where we have to pass to the child for eg we pass to 3 childs */}
          <ContextC />
          <ContextD />
        </EmailContext.Provider>
      </NameContext.Provider>
      __________________________________
    </div>
  );
}

export { NameContext };
export { EmailContext };
export default Contextmain;

// USING USECONTEXT
// COMPLICATION SOLVING
