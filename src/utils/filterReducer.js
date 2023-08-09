import React, { useReducer } from "react";
import { FILTER_ACTIONS} from '../constants/constant';

export const defaultFilterState = {
    loading: false,
    selected: 0
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
          selected: '',
        };
      default:
        return state
    }
}

export const useFilterReducerThunk = () => { 
  const [state, dispatch] = useReducer(FilterReducer, defaultFilterState);
  return [state, dispatch];

}
