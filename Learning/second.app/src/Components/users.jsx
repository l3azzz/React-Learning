// src/components/Users.js

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response);
      console.log(users);
    }).catch = (e) => {
      console.log("Error Occured", e);
    };
    // get --request isa function ("which url https address goes to")
  }, []);
  // empty array wmean whenthe compon loads
  return <div>Users</div>;
}
