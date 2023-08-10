import React, { useState } from 'react'
import Button from "./Button";
import { FILTER_ACTIONS } from '../constants/constant';
const NavigationBar = ({ setCategory, dispatch }) => {
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
            type: FILTER_ACTIONS.CLEAR_CATEGORY
          })
        }
      />
    </div>
  );
};
export default NavigationBar;
