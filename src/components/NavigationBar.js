import React, { useState } from 'react'
import Button from "./Button";
const NavigationBar = ({ setCategory }) => {
  return (
    <div style={{ borderBottom: "1px solid #DDD", paddingBottom: "12px" }}>
      <Button
        btnText={`Simple`}
        btnType={`primary`}
        handleOnClick={() => setCategory(1)}
      />
      <Button
        btnText={`Luxury`}
        btnType={`warning`}
        handleOnClick={() => setCategory(2)}
      />
      <Button
        btnText={`Rugged`}
        btnType={`danger`}
        handleOnClick={() => setCategory(3)}
      />
      <Button
        btnText={`Clear Filter`}
        btnType={`default`}
        handleOnClick={() => setCategory(0)}
      />
    </div>
  );
};
export default NavigationBar;
