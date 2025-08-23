// USE STATE WITH ARRAY

import { useState } from "react";

function Usestatewitharray() {
  // const [student, setStudent] = useState({ name: "Sobir N", age: 15 });

  const [items, setItems] = useState([]); // in this usestat you can see array []
  const [input, setInput] = useState(""); // takes input default value = string "...."
  let addItems = () => {
    setItems([...items, { name: input, id: items.length }]);
    setInput("");
  };
  // ... instead of going to every signle obje, array, arrya we use ... it spread into a new array where all the items are listed by that we just call it's name then what we want it funciton just like nomral
  return (
    <>
      {/* <h1>
        {student.name}, {student.age}
      </h1>
      <button onClick={() => setStudent({ ...student, name: "Joe" })}>
        Update Name
      </button>
      <button
      adfasdf
      adfasdf
      Add
        onClick={() =>
          setStudent((prevState) => ({
            ...student,
            age: prevState.age + 1,
          }))
        }
      >
        Increment Age
      </button>
      <h1>{JSON.stringify(student)}</h1>
      ith object inu veandiyittullah cheythathaanu  so we abondon it */}

      <ul>
        {/* --------------------------------------------------- */}
        {items.map((item) => {
          // maps items then put it in "item"
          return <li key={item.id}>{item.name}</li>; // 📝 Display each item's name in a list item
          //  returning li with key= items id and content = item name
        })}

        {/* --------------------------------------------------- */}
      </ul>
      {/* functionalities ================= */}
      <input
        className="textInputWrapper"
        value={input}
        onChange={(eventtracker) => {
          setInput(eventtracker.target.value);
        }}
      />
      {/* change aakumbol input value event track cheythathinu sheasham input = event_tracker.target.value aakkum */}
      {/* 🖊️ Text input,currently  */}
      <button onClick={addItems}>Add</button>
      {/* when adding click it uses function "AddItems" */}
      {/* ➕ Button to add item,  */}
      {/* functionalities ================= */}
    </>
  );
}

export default Usestatewitharray;
