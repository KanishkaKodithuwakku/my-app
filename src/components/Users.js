import React, { useState, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faUserPlus,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import TextInput from "./common/TextInput";
import Button from "./common/Button";

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
        active: false,
      };

      return [...state, newUser];

    case ACTIONS.REMOVE_USER:
      return state.filter((user) => user.id !== action.payload);
    
    case ACTIONS.UPDATE_USER:
      return state.map((user) =>
        user.id === action.payload ? { ...user, active: !user.active} : user
      );
    
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
      active: true,
    },
    {
      id: uuidv4(),
      name: "Jane Doe",
      email: "janedoe@example.com",
      age: "30",
      active: true,
    },
    {
      id: uuidv4(),
      name: "Bob Smith",
      email: "bobsmith@example.com",
      age: "35",
      active: true,
    },
  ];
  const [user, setUser] = useState("");
  const [state, dispatch] = useReducer(userReducer, usersArray);

  // useEffect(() => {
  //   dispatch({ type: "" });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(user);
    if (user !== "") dispatch({ type: "add-user", payload: user });
    setUser("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-between align-items-center"
      >
        <TextInput
          value={user}
          placeholder={`Add User`}
          handleOnChange={(value) => setUser(value)}
        />
        <Button addStyle={`ml-2`} btnColor="primary">
          <FontAwesomeIcon icon={faUserPlus} />
        </Button>
      </form>

      <ul className="list-group mt-2">
        {state.map((user) => (
          <li
            key={user.id}
            className="list-group-item  d-flex justify-content-between align-items-center"
          >
            <span style={{ color: user.active ? "#000" : "#ccc" }}>
              {user.name}
            </span>
            <div>
              <FontAwesomeIcon
                icon={faBan}
                onClick={() =>
                  dispatch({ type: "update-user", payload: user.id })
                }
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() =>
                  dispatch({ type: "remove-user", payload: user.id })
                }
                style={{ marginLeft: 4 }}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
