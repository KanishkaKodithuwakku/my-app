import React, { useState, useReducer } from "react";

const ACTIONS = {
  ADD_USER: "add-user",
  REMOVE_USER: "remove-user",
  UPDATE_USER: "update-user",
};

function userReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const Users = () => {
  const usersArray = [
    {
      nama: "John Doe",
      email: "johndoe@example.com",
      age: "25",
    },
    {
      nama: "Jane Doe",
      email: "janedoe@example.com",
      age: "30",
    },
    {
      nama: "Bob Smith",
      email: "bobsmith@example.com",
      age: "35",
    },
  ];
  const [user, setUser] = useState([]);
  const [state, dispatch] = useReducer(userReducer, usersArray);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add New User
        </button>
      </form>

      <ul className="list-group">
        {state.map((user) => ( 
          <li className="list-group-item">{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
