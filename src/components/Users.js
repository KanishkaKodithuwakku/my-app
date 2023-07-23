import React, { useState, useReducer ,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ACTIONS = {
  ADD_USER: "add-user",
  REMOVE_USER: "remove-user",
  UPDATE_USER: "update-user",
};

function userReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_USER:

      console.log(action.payload);

      const newUser = {
        id: uuidv4(),
        name: action.payload,
        age: 90,
        email: "kanishka@gmail.com",
      };

    return [...state, newUser];

     
    default:
      return state;
  }
}

const Users = () => {

  const usersArray = [
    {
      id: uuidv4(),
      name: "John Doe",
      email: "johndoe@example.com",
      age: "25",
    },
    {
      id: uuidv4(),
      name: "Jane Doe",
      email: "janedoe@example.com",
      age: "30",
    },
    {
      id: uuidv4(),
      name: "Bob Smith",
      email: "bobsmith@example.com",
      age: "35",
    },
  ];
  const [user, setUser] = useState('');
  const [state, dispatch] = useReducer(userReducer, usersArray);

  // useEffect(() => {
  //   dispatch({ type: "" });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(user);
    dispatch({type:'add-user', payload:user});
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
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
