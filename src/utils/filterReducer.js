import React from 'react'
import { FILTER_ACTIONS} from '../constants/constant';

export const defaultFilterState = {
    loading: false,
    selected: ''
}

export const FilterReducer = (state, action) => { 
    const { type, payload } = action;
    switch (type) {
      case FILTER_ACTIONS.SELECTED_CATEGORY:
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

export const FilterReducerThunk = () => { 
    //return [state.loading, state.selected]

}
