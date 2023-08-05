import React from 'react'

const Layouts = ({children}) => { 

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">{children}</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Layouts;
