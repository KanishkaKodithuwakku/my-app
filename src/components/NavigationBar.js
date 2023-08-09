import React, { useState } from 'react'
import Button from "./Button";
import { useFilterReducerThunk } from "../utils/filterReducer";
import { FILTER_ACTIONS } from '../constants/constant';
const NavigationBar = ({ setCategory }) => {

  const [state,dispatch] = useFilterReducerThunk();

  return (
    <div style={{ borderBottom: "1px solid #DDD", paddingBottom: "12px" }}>
      <Button
        btnText={`Simple`}
        btnType={`primary`}
        handleOnClick={() =>
          dispatch({
            type: FILTER_ACTIONS.SELECTED_CATEGORY,
            payload: { category: 1 },
          })
        }
      />
      <Button
        btnText={`Luxury`}
        btnType={`warning`}
        handleOnClick={() =>
          dispatch({
            type: FILTER_ACTIONS.SELECTED_CATEGORY,
            payload: { category: 2 },
          })
        }
      />
      <Button
        btnText={`Rugged`}
        btnType={`danger`}
        handleOnClick={() =>
          dispatch({
            type: FILTER_ACTIONS.SELECTED_CATEGORY,
            payload: { category: 3 },
          })
        }
      />
      <Button
        btnText={`Clear Filter`}
        btnType={`default`}
        handleOnClick={() =>
          dispatch({
            type: FILTER_ACTIONS.SELECTED_CATEGORY,
            payload: { category: 0 },
          })
        }
      />
    </div>
  );
};
export default NavigationBar;
