import React, { useState } from "react";
function ToDo_Component() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  // finsih

  const addItem = () => {
    if (input === "") {
      alert("Please Enter Anything!");
    } else {
      setTask([
        ...task,
        { task_name: input, id: task.length, is_completed: false },
      ]);
    }
    setInput("");
    // finsih
  };
  // console.log(task);
  // .addEventListener("clicked", () => console.log(task));

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="todo-body">
        <h2>Things to be done</h2>
        <ul className="to-do-list">
          <li>
            <span className="chkbox"></span>
            <span>1, Buy 1 kg Tomato</span>
            <span className="delete">
              <i className="fas fa-trash"></i>
            </span>
          </li>
          <li>
            <span className="chkbox"></span>
            <span>2, Buy 2kg Onion</span>
            <span className="delete">
              <i className="fas fa-trash"></i>
            </span>
          </li>
          <li>
            <span className="chkbox"></span>
            <span>3, Visit friend</span>
            <span className="delete">
              <i className="fas fa-trash"></i>
            </span>
          </li>
          <li>
            <span className="chkbox"></span>
            <span>4, Clean House</span>
            <span className="delete">
              <i className="fas fa-trash"></i>
            </span>
          </li>
        </ul>
        <div className="add-task-row">
          <input
            type="text"
            placeholder="+ Type new task..."
            value={input}
            onChange={(char) => setInput(char.target.value)}
          />

          <button className="submit" onClick={addItem}>
            Add New
          </button>
        </div>
        <h2>Completed</h2>
        <ul className="done-list">
          <li>
            <span className="chkbox done"></span>
            <span className="task-done">5, Washing Clothes</span>
            <span className="revert">
              <i className="fas fa-undo"></i>
            </span>
            <span className="delete">
              <i className="fas fa-trash"></i>
            </span>
          </li>
          <li>
            <span className="chkbox done"></span>
            <span className="task-done">6, Play Cricket</span>
            <span className="revert">
              <i className="fas fa-undo"></i>
            </span>
            <span className="delete">
              <i className="fas fa-trash"></i>
            </span>
          </li>
          <li>
            <span className="chkbox done"></span>
            <span className="task-done">7, 1 km Walking</span>
            <span className="revert">
              <i className="fas fa-undo"></i>
            </span>
            <span className="delete">
              <i className="fas fa-trash"></i>
            </span>
          </li>
          <li>
            <span className="chkbox done"></span>
            <span className="task-done">8, Do Homework</span>
            <span className="revert">
              <i className="fas fa-undo"></i>
            </span>
            <span className="delete">
              <i className="fas fa-trash"></i>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default ToDo_Component;
