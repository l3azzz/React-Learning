// src/components/Users.js

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users3() {
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

  // what if more api's are with base different urls what the heck iwllll happen bloody
  // AXIOS BASERURL SETUP KUREAY ATHIKAM API UNDENKIL NJAAAN MOONJUM ALLEAYH
  // AXIOS.defaults.baseurl("blahblabaljlfjslafjslaflsdfjf/")
  // fr that we wil create axios config file .js file then axios imprt
  // then reqresconfig undakkum = axios.create ({baseurl: "https:///what eh duck up ehre "}) const fakestore config = axios.create ({baseURL: chandhy/ad/a/})
  // then nammal direct vilikkuma thinte mandayil ayti
  console.log("_________");
  //  now we got what if it is in aray how to render bah blah blah
  return <div>{renderUsers()}</div>;
}
