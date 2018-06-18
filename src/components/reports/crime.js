import React, { Component } from "react";
import { connect } from "react-redux";

class Crime extends Component {
  constructor() {
    super();
    this.state = {
      cityCrimeData: undefined,
      crimeReports: undefined,
      error: ''
    };
    this.getCrimeData = this.getCrimeData.bind(this);
  };


  getCrimeData(cityNameArg) {
    let cityName = cityNameArg.toString();
    if (this.props.allData[cityName]) {
      if (this.props.allData[cityName]["crimes"]) {
        var data = this.props.allData[cityName]["crimes"];
        var arrayOfCitYCrimes = [];
        for (let key in data) {
          arrayOfCitYCrimes.push(data[key]);
        };
        this.setState({
          crimeReports: arrayOfCitYCrimes,
          error: ''
        });
      } else {
        this.setState({
          error: 'No crime reprots of this city.',
          crimeReports: undefined
        });
      }
    } else {
      this.setState({
        error: 'This city has no reprots related to any crime.',
        crimeReports: undefined
      });
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <select
            className="form-control form-control-lg my-2"
            onChange={(event) => this.getCrimeData(event.target.value)}
          >
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

        {this.state.crimeReports === undefined ?
          <h3 className="text-center my-5">Select City for crime reports </h3> : this.state.crimeReports.map((item, index) => (
            (
              <div className="row mt-3" key={index}>
                <div className="card w-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      Name : {item.name}
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
        <h5 className="text-center text-warning">{this.state.error}</h5>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allData: state.report
});
export default connect(mapStateToProps)(Crime);
