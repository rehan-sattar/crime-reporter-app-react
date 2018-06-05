import React, { Component } from "react";
import { fire as firebase } from "../firebase/firebase";

class Complaints extends Component {

  constructor() {
    super();
    this.state = {
      complaints: []
    }
  }
  
  componentDidMount() {
    firebase.database().ref().on('value', (snapshote) => {
      console.log(snapshote.val().complaints);
      this.setState({
        complaints: this.state.complaints.concat(snapshote.val().complaints)
      })
      console.log(this.state);
    });
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-3">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Name :{this.state.complaints.name}<br /> Report Title: Complaints </h5>
                <hr />
                <h5> Description:  </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardstent.</p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Name : Soha <br /> Report Title: Complaints </h5>
                <hr />
                <h5> Description:  </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cardstent.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}





export default Complaints;
