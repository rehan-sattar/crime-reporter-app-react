import React, { Component } from "react";
import { fire as firebase } from "../firebase/firebase";
class Crime extends Component {
  constructor() {
    super();
    this.state = {
      crimeArray: undefined
    }
  }
  componentWillMount() {
    const refNode = firebase.database().ref('reports').child('crime');
    refNode.on('value', (snapshot) => {
      const crimeReports = [];
      snapshot.forEach((childSnapshot) => {
        crimeReports.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      this.setState({
        crimeArray: crimeReports
      })
    });
  }

  render() {
    return (
      <div>
        {this.state.crimeArray === undefined ?
         <h3 className="text-center my-5">Loading... </h3> : this.state.crimeArray.map((item,index) => (
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

export default Crime;
