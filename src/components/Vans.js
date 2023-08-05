import React, { useEffect, useReducer } from "react";
import "./van.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./Card";
import useFetch from "../utils/useFetch";
import Spinner from "./Spinner";
import Alert from "./Alert";

const ACTIONS = {
  VAN_RESULT: "VAN_RESULT",
  CATEGORY_RESULT: "CATEGORY_RESULT",
  FILTER_CATEGORY: "FILTER_CATEGORY",
};

const initialState = {
  categories: null,
  vans: null,
  selectedCategory: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload.category);

  switch (type) {
    case ACTIONS.VAN_RESULT:
      return {
        vans: payload.category
          ? payload.vans.filter((v) => v.category === payload.category)
          : payload.vans,
      };
    case ACTIONS.CATEGORY_RESULT:
      return {
        caregory_id: payload.category_id,
      };
    case ACTIONS.FILTER_CATEGORY:
      return {
        selectedCategory: payload.category_id,
      };
    default:
      return { vans: state, category: state };
  }
};

const Vans = ({ category }) => {
  const [state_new, dispatch] = useReducer(reducer, initialState);
  const {
    loading: vans_loading,
    error: vans_error,
    result: vans,
  } = useFetch("/vans");

  useEffect(() => {
    dispatch({
      type: ACTIONS.VAN_RESULT,
      payload: { vans: vans, category: category },
    });
  }, [vans, category]);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {vans_loading && <Spinner />}
          {vans_error && <Alert />}
        </div>
      </div>
      <div className="row">
        {state_new.vans &&
          state_new.vans.map((van) => (
            <div className="col-md-3" key={van.id}>
              <Card {...van} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Vans;
