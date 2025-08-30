// src/components/Users.js

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users2() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Fetching users...");
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((e) => {
        console.log("Error Occurred", e);
      });
  }, []);

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      );
    });
  };

  console.log("_________");
  //  now we got what if it is in aray how to render bah blah blah
  return <div>{renderUsers()}</div>;
}
