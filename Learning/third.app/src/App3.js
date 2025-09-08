import { React, useRef } from "react";
class App extends React.Component {
  render() {
    const slideref = useRef();
    return (
      <>
        <ul>
          <li>
            this is the first app3.js <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;

// UI Engineer / React / Useful Plugins
// Custom arrow buttons

/* 
The useRef function is a React Hook that allows you to reference a value that persists between renders without causing re-renders. It returns a mutable object with a single current property that can hold any value.

Core Uses of useRef
Accessing DOM Elements
The most common use case is to directly interact with DOM elements. You can focus inputs, scroll to elements, or manipulate styles without triggering component re-renders:

javascript----------------------

import { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus(); // Focus input on mount
  }, []);
  
  return <input ref={inputRef} />;
}
  ---------------------
Storing Mutable Values
useRef is perfect for storing values that need to persist across renders but don't affect the UI directly. Unlike state, changing a ref's value doesn't trigger a re-render:

javascript-------------

const MyComponent = () => {
  const countRef = useRef(0);
  
  const increment = () => {
    countRef.current += 1; // No re-render triggered
    console.log(countRef.current);
  };
  
  return <button onClick={increment}>Count: {countRef.current}</button>;
};
-------------------

Key Characteristics

Persistence: The ref object remains the same between re-renders
Mutability: You can directly modify ref.current without restrictions
No re-renders: Changing the ref value doesn't trigger component updates
Initialization: Takes an initial value that becomes ref.current

Common Applications

Managing Timers and Intervals
Store timer IDs to clear them later without affecting component state.

Tracking Previous Values
Keep track of previous prop or state values for comparisons.

Imperative Animations
Control video playback, modals, or other DOM manipulations directly.

Performance Optimization
Store expensive calculations or objects that don't need to trigger renders.


The key distinction is that useRef is for values you need to remember but not react to - when you need persistence without the overhead of re-rendering that comes with state updates
*/
