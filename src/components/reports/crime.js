import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReportCard from './ReportCard';

class Crime extends Component {
  constructor() {
    super();
    this.state = {
      cityCrimeData: undefined,
      crimeReports: undefined,
      error: ''
    };
    this.getCrimeData = this.getCrimeData.bind(this);
  }

  getCrimeData(cityNameArg) {
    let cityName = cityNameArg.toString();
    if (this.props.allData[cityName]) {
      if (this.props.allData[cityName]['crimes']) {
        var data = this.props.allData[cityName]['crimes'];
        var arrayOfCitYCrimes = [];
        for (let key in data) {
          arrayOfCitYCrimes.push(data[key]);
        }
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
        <div className='container'>
          <select
            className='form-control form-control-lg my-2'
            onChange={event => this.getCrimeData(event.target.value)}
          >
            <option value='cityName' className='text-muted'>
              Select City
            </option>
            <option value='new york'> New York</option>
            <option value='los Angeles'> Los Angeles </option>
            <option value='Chicago'> Chicago </option>
            <option value='houston'> Houston </option>
            <option value='Philadelphia'> Philadelphia </option>
            <option value='phoenix'> Phoenix </option>
            <option value='San Antonio'> San Antonio </option>
            <option value='San Diego'> San Diego </option>
            <option value='Dallas'> Dallas </option>
            <option value='San Jose'>San Jose </option>
          </select>
        </div>

        {this.state.crimeReports === undefined ? (
          <p className='text-center lead my-5 text-white'>
            Select city for crime reports
          </p>
        ) : (
          this.state.crimeReports.map((item, index) => (
            <ReportCard item={item} key={index} index={index} />
          ))
        )}
        <h5 className='text-center text-white'>{this.state.error}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allData: state.report
});
export default connect(mapStateToProps)(Crime);
