import React from 'react'
const Button = ({children, type, addStyle, btnColor}) => { 
    return (
      <>
        <button className={`btn btn-${btnColor} ${addStyle}`} type={type}>
          {children}
        </button>
      </>
    );
}
Button.defaultProps = {
  type: "submit",
  addStyle:''
};
export default Button;
