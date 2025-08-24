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
        { task_name: input, id: task.length + 1, is_completed: false },
      ]);
    }
    setInput("");
    // finsih
  };

  const changestate = (identity) => {
    setTask((state) =>
      state.map((task) =>
        task.id === identity ? { ...task, is_completed: true } : task
      )
    );
  };

  const deleteItem = (identity) => {
    setTask((task_main) => task_main.filter((task) => task.id !== identity));
  };

  const revertitem = (identity) => {
    setTask((state) =>
      state.map((task) =>
        task.id === identity ? { ...task, is_completed: false } : task
      )
    );
  };

  const renderitem_top = () => {
    return (
      <>
        {task
          .filter((task) => task.is_completed === false)
          .map((task) => {
            return (
              <li key={task.id}>
                <span
                  className="chkbox"
                  onClick={() => changestate(task.id)}
                ></span>
                <span>
                  {task.id + ", "}
                  {task.task_name}
                </span>
                <span className="delete" onClick={() => deleteItem(task.id)}>
                  <img
                    style={{ height: "31px" }}
                    src={require("../delete.svg").default}
                    alt="del icon"
                  />
                </span>
              </li>
            );
          })}
      </>
    );
  };
  const renderitem_bottom = () => {
    return (
      <>
        {task
          .filter((task) => task.is_completed === true)
          .map((task) => {
            return (
              <li key={task.id}>
                <span className="chkbox done"></span>

                <span className="task-done">
                  {task.id + ", "}
                  {task.task_name}
                </span>
                <span className="delete" onClick={() => deleteItem(task.id)}>
                  <img
                    style={{ height: "31px" }}
                    src={require("../delete.svg").default}
                    alt="del icon"
                  />
                </span>
                <span className="revert" onClick={() => revertitem(task.id)}>
                  <img
                    style={{ height: "31px" }}
                    src={require("../revert.svg").default}
                    alt="del icon"
                  />
                </span>
              </li>
            );
          })}
      </>
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="todo-body">
        <h2>Things to be done</h2>
        <ul className="to-do-list">{renderitem_top()}</ul>
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
        <ul className="done-list">{renderitem_bottom()}</ul>
      </section>
    </div>
  );
}
export default ToDo_Component;
