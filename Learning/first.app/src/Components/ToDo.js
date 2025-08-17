// APP18.JS LINKAGE

// UPDATE COMPONENT WITH STATE

import React, { Component } from "react"; // Importing React and the Component base class

class ToDo extends Component {
  // Constructor: special function that runs when an object is created from this class
  constructor(props) {
    super(props); // gives access to parent methods/props, required before using 'this'
    this.state = {
      // 'state' = built-in React object for storing local data for the component
      items: [], // Array to hold all todo item objects; changes here trigger re-render
      input: "", // String to track what's typed in the input box
    };
  }

  // removeItem: deletes an item from the list, given its id
  removeItem = (id) => {
    // .filter: makes a new array with ONLY items whose id doesn't match
    let new_items = this.state.items.filter(
      (item) => item.id !== id // remove the one that matches, keep all others
    );
    this.setState({ items: new_items }); // updates state to new array; triggers UI update
    // setState: built-in React method to update the state and UI
  };

  // renderItems: generates an array of <li> elements, each representing one todo item
  renderItems = () => {
    // .map: built-in JS array method that loops and transforms each item
    return this.state.items.map((item) => (
      // Each list item needs a 'key' prop that's unique for React to track efficiently
      <li key={item.id}>
        {item.title} {/* Shows this item's text */}
        {/* 'button' with onClick triggers removeItem with the current item's id */}
        <button onClick={() => this.removeItem(item.id)}>Delete</button>
        {/* The arrow function here creates a new function for each render */}
      </li>
    ));
    // Just returning this.state.items would NOT work – React can't render objects as UI!
    // Must return array of JSX elements for rendering
  };

  // updateItem: adds a new todo item when "Add New" button is clicked
  updateItem = () => {
    // new_item: builds an object for the new todo from input text
    let new_item = {
      id: this.state.items.length, // uses current array length as a simple unique id
      title: this.state.input, // uses what user typed in input box
    };
    if (this.state.input) {
      // Only add if input isn't empty (truthy check)
      // setState here updates BOTH the items array (adds new item) and clears the input box
      this.setState({
        items: [...this.state.items, new_item], // new array, preserves existing data ("spread" syntax)
        input: "", // immediately clears box after adding
      });
      // [spread syntax]: ...this.state.items means take all elements and add one at end
      // setState automatically triggers the React render/update cycle
    }
  };

  // render: required function in React class components to display UI
  render() {
    // Render returns JSX, a syntax for building HTML UI with JS
    return (
      <>
        <ul>
          {/* h3: simple heading above the list */}
          <h3>To Do List</h3>
          {/* Render the array of list items returned from renderItems() */}
          {this.renderItems()}
          {/* Input: allows user to type new tasks;
              value is bound to state, so it's always in sync */}
          <input
            placeholder="New Task" // hint inside the box
            value={this.state.input} // controlled input: value set by state
            onChange={(e) =>
              this.setState({
                // handle change event (each keystroke)
                input: e.target.value, // update state.input with the latest value
              })
            }
          />
          {/* Button which calls updateItem when clicked to add a new todo */}
          <button onClick={this.updateItem}>
            Add New : {this.state.input}
          </button>
          {/* JSON.stringify(this.state.items) would print the array as plain text for debugging
              If you use just {this.state.items}, React renders "[object Object][object Object]" which isn't useful
              Using JSON.stringify shows all the object content, handy for debugging or development */}
          {/* {JSON.stringify(this.state.items)} */}
        </ul>
      </>
    );
  }
}
export default ToDo; // allows importing this component in other files (standard ES6 module syntax)
