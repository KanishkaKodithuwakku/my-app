import React, { useReducer } from "react";
import { FILTER_ACTIONS} from '../constants/constant';

export const defaultFilterState = {
    loading: false,
    selected: null
}

export const FilterReducer = (state, action) => { 
    const { type, payload } = action;
    switch (type) {
      case FILTER_ACTIONS.SELECTED_CATEGORY:
        console.log("SELECTED_CATEGORY ", payload.category);
        return {
          loading: true,
          selected: payload.category,
        };
      case FILTER_ACTIONS.CLEAR_CATEGORY:
        return {
          loading: false,
          selected: null,
        };
      default:
        return state
    }
}

export const useFilterReducerThunk = () => { 
  const [state, dispatch] = useReducer(FilterReducer, defaultFilterState);
  return [state, dispatch];
}
