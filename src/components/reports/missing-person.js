import React, { Component } from "react";
import { connect } from "react-redux";

class MissingPerson extends Component {
  constructor() {
    super();
    this.state = {
      missingPersonArray: undefined,
      cityName: undefined,
      error: ''
    };
    this.getMissingPersonData = this.getMissingPersonData.bind(this)
  }
  getMissingPersonData(cityNameArg) {

    var cityName = cityNameArg.toString();
    if (this.props.allData[cityName]) {
      if (this.props.allData[cityName]["missing_person"]) {
        var data = this.props.allData[cityName]["missing_person"];
        var arrayOfCity_missing_person = [];
        for (let key in data) {
          arrayOfCity_missing_person.push(data[key]);
        };
        this.setState({
          missingPersonArray: arrayOfCity_missing_person,
          error: ''
        });
      } else {
        this.setState({
          error: 'No crime reprots of this city!',
          missingPersonArray: undefined
        })
      }
    } else {
      this.setState({
        error: 'This city has no reprots related to any crime.',
        missingPersonArray: undefined
      })
      console.log();
    }

  }

  render() {
    return (
      <div>

        <div className="container" onChange={(event) => this.getMissingPersonData(event.target.value)}>
          <select className="form-control form-control-lg my-2">
            <option value="cityName" className="text-muted">Select City</option>
            <option value="new york"> New York</option>
            <option value="los Angeles"> Los Angeles </option>
            <option value="Chicago"> Chicago </option>
            <option value="houston"> Houston </option>
            <option value="Philadelphia"> Philadelphia </option>
            <option value="phoenix">  Phoenix </option>
            <option value="San Antonio">  San Antonio </option>
            <option value="San Diego">  San Diego </option>
            <option value="Dallas"> Dallas </option>
            <option value="San Jose">San Jose </option>
          </select>
        </div>
        {this.state.missingPersonArray === undefined ? <h3 className="text-center my-5">Select a city for Missing Person </h3> :
          this.state.missingPersonArray.map((item, index) => (
            <div className="row mt-3" key={index}>
              <div className="card w-100">
                <div className="card-header bg-dark text-white text-center">
                  <div className="card-title">
                    <h3>Missing Person Reprot: {index + 1}</h3>
                  </div>
                </div>
                <div className="card-body">
                  <h5> Name : {item.userName}</h5>
                  <hr />
                  <h5> City Name: {item.cityName}</h5>
                  <hr/>
                  <h5> Missing Person name: {item.missingPersonName}</h5>
                  <hr />
                  <h5> Description:  </h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        <h5 className="text-center text-warning">{this.state.error}</h5>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  allData: state.report
});
export default connect(mapStateToProps)(MissingPerson);
