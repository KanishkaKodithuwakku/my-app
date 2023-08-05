import React from 'react'
const TitleBar = ({ title }) => { 
    return (
      <>
        <h1>{title}</h1>
      </>
    );
}
TitleBar.defaultProps = {
    title : 'title'
}
export default TitleBar;
