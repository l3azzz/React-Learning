import React, { useContext } from "react";
import { NameContext } from "./Context_main";

export default function ContextC() {
  const name = useContext(NameContext); // simple add to a var then use
  return (
    // <NameContext.Consumer>
    //   {(name) => <h1>hi my name is {name} CCCCCCCC </h1>}
    // </NameContext.Consumer>
    // above is tough
    <h1>my name is {name}</h1>
  );
}
// use context replaced these complication
