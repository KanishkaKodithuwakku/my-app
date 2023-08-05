import React from 'react'
const Button = ({ btnText, handleOnClick, btnType }) => { 
    return (
        
        <button onClick={handleOnClick} className={`btn btn-${btnType}`} style={{marginLeft:4, marginBottom:4}}>
          {btnText}
        </button>
      
    );
    
}
Button.defaultProps = {
  btnText: "Submit",
  btnType : 'primary'
};
export default Button;
