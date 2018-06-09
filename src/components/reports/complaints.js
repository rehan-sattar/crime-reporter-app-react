import React, { Component } from "react";
import firebase from "firebase";

class Complaints extends Component {

  constructor() {
    super();
    this.state = {
      complaints: undefined
    }
  }

  componentDidMount() {
    firebase.database().ref('reports').child('complaints').on('value', (snapshot) => {
      const complaints = [];
      snapshot.forEach((childSnapshot) => {
        complaints.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      this.setState({
        complaints
      })
    });
  }


  render() {
    return (
      <div>
        {this.state.complaints === undefined ?
         <h3 className="text-center my-5">Loading... </h3> : 
         this.state.complaints.map((item,index) => (
            (
              <div className="row mt-3" key={index}>
                <div className="card w-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      Name : {item.name}
                      <br /> Report Title:{item.titleOfCompliaint} 
                      <br /> City Name: {item.cityName}
                      </h5>
                    <hr />
                    <h5> Description:  </h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>

            )
          ))}
      </div>
    );
  }
}





export default Complaints;
