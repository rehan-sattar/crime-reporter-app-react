import React, { Component } from "react";
import { connect } from "react-redux";


class MissingPerson extends Component {
  render() {
    return (
      <div>
        {console.log("inside Missing Person component: ", this.props.missingPersonData)}
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

          {this.props.missingPersonData.map((item, index) => (
            <div className="row mt-3">
              <div className="card w-100">
                <div className="card-body">
                  <h5 className="card-title">Name : {item.userName} <br />
                    Missing person: {item.missingPersonName} <br />
                    Report Title: {item.titleOfCompliaint} <br />
                    Missing Date: {item.dateOfMissing} 
                  </h5>
                  <hr />
                  <h5> Description:  </h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    missingPersonData: state.report.missingPerson
  }
}
export default connect(mapStateToProps)(MissingPerson);
