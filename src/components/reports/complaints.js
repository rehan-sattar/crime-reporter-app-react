import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReportCard from './ReportCard';

class Complaints extends Component {
  constructor() {
    super();
    this.state = {
      complaintsDataFromDB: undefined,
      cityName: undefined,
      error: ''
    };
    this.getComplaintsData = this.getComplaintsData.bind(this);
  }

  getComplaintsData(cityNameArgument) {
    let cityName = cityNameArgument.toString();
    if (this.props.allData[cityName]) {
      if (this.props.allData[cityName]['complaints']) {
        var data = this.props.allData[cityName]['complaints'];
        var arrayOfCitYComplaints = [];
        for (let key in data) {
          arrayOfCitYComplaints.push(data[key]);
        }
        this.setState({
          complaintsDataFromDB: arrayOfCitYComplaints,
          error: ''
        });
      } else {
        this.setState({
          error: 'No complaint reprots of this city!',
          complaintsDataFromDB: undefined
        });
      }
    } else {
      this.setState({
        error: 'This city has no reprots related to any crime.',
        complaintsDataFromDB: undefined
      });
    }
  }

  render() {
    return (
      <div>
        <div className='container'>
          <select
            className='form-control form-control-lg my-2'
            onChange={e => this.getComplaintsData(e.target.value)}
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
        {this.state.complaintsDataFromDB === undefined ? (
          <p className='lead text-center text-white my-5'>
            {' '}
            Select a city for complaints.{' '}
          </p>
        ) : (
          this.state.complaintsDataFromDB.map((item, index) => (
            <ReportCard item={item} key={index} index={index} />
          ))
        )}
        <h5 className='text-center text-warning'>{this.state.error}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allData: state.report
});
export default connect(mapStateToProps)(Complaints);
