import React, { useReducer } from "react";
import { VAN_ACTIONS } from "../constants/constant";


export const initialState = {
  loading: true,
  result: null,
  error: null,
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case VAN_ACTIONS.LOADING:
      return { loading: true, result: null, error: null };
    case VAN_ACTIONS.RESULT:
      return { result: payload.result, loading: false, error: false };
    case VAN_ACTIONS.ERROR:
      return {
        error: payload.error,
        result: null,
        loading: false,
      };
    default:
      return state;
  }
};

export const VanReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return { state, dispatch };
};

