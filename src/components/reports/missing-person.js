import React, { Component } from "react";
import {connect} from "react-redux";

const MissingPerson = () => (
  <div>
    <div className="container">
      <div className="row mt-3">
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title">Name : Rehan <br /> Report Title: Missing Person <br /> Missing Date: 20-2-1999  </h5>
            <hr />
            <h5> Description:  </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardstent.</p>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title">Name : Soha <br /> Report Title: Missing Person  <br /> Missing Date: 18-8-1997   </h5>
            <hr />
            <h5> Description:  </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardstent.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MissingPerson;
