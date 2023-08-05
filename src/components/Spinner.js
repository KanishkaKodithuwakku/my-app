import React from 'react'
const Spinner = ({message,spinnercolor}) => { 
    return (
      <div className={`spinner-border text-${spinnercolor}`} role="status">
        <span className="visually-hidden">{message}...</span>
      </div>
    );
}
Spinner.defaultProps = {
  spinnercolor: "danger",
  message: 'Loading'
};
export default Spinner;
