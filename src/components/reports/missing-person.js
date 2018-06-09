import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "firebase";


class MissingPerson extends Component {
  constructor() {
    super();
    this.state = {
      missingPersonArray: undefined
    }
  }
  componentWillMount() {
    const refNode = firebase.database().ref('reports').child('missing-person');
    refNode.on('value', (snapshot) => {
      const missing_persons = [];
      snapshot.forEach((childSnapshot) => {
        missing_persons.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      this.setState({
        missingPersonArray: missing_persons
      })
    });
  }

  render() {
    return (
      <div>
        {this.state.missingPersonArray === undefined ? <h3 className="text-center my-5">Loading... </h3> :
          this.state.missingPersonArray.map((item,index) => (
            <div className="row mt-3" key={index}>
              <div className="card w-100">
                <div className="card-body">
                  <h5 className="card-title">
                    Name : {item.userName}
                    <br /> Report Title:{item.titleOfCompliaint}
                    <br /> City Name: {item.cityName}
                    <br /> Missing Person name: {item.missingPersonName}
                  </h5>
                  <hr />
                  <h5> Description:  </h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>

          )) }
      </div>
    );
  }
}

export default MissingPerson;
