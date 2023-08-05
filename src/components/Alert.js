import React from 'react'
const Alert = ({message,color}) => { 
    return (
      <div className={`alert alert-${color}`} role="alert">
        {message}
      </div>
    );
}
Alert.defaultProps = {
  color: "danger",
  message: 'Unknown Error...'
};
export default Alert;
