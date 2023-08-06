import React, { useEffect, useReducer } from "react";
import "./van.css";
import "react-toastify/dist/ReactToastify.css";
import Card from "./Card";
import useFetch from "../utils/useFetch";

const Vans = ({ category, collection: vans}) => {

  return (
    <>
      <div className="row">
        {vans &&
          vans.map((van) => (
            <div className="col-md-3" key={van.id}>
              <Card {...vans} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Vans;
