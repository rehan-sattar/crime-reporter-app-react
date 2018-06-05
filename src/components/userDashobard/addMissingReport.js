import DatePicker from 'react-date-picker';
import React from "react";
import { connect } from "react-redux";
import { handleMissingPerson } from "../../actions/reportActions";
import "./styles.css";
class AddMissingPerson extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      missingPersonName: '',
      email: '',
      titleOfCompliaint: '',
      description: '',
      dateOfMissing: ''
    };
  };

  hanleMissingPersonReport(event) {
    event.preventDefault();
    this.props.submitMissingPersonReport(this.state);
    this.setState({
      userName: '',
      missingPersonName: '',
      email: '',
      cityName : '',
      titleOfCompliaint: '',
      description: '',
      dateOfMissing: '',
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="card mb-5">
            <div className="card-header text-white text-center">
              <h1>Missing Person Report </h1>
            </div>
            <form onSubmit={this.hanleMissingPersonReport.bind(this)}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="UName">
                    <h4>Your Name: </h4>
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="UName"
                    value={this.state.userName}
                    onChange={(event) => { this.setState({ userName: event.target.value }) }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="MissingPersonName">
                    <h4>Missing Person Name: </h4>
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="MissingPersonName"
                    value={this.state.missingPersonName}
                    onChange={(event) => { this.setState({ missingPersonName: event.target.value }) }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <h4> Email: </h4>
                  </label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="email"
                    value={this.state.email}
                    onChange={(event) => { this.setState({ email: event.target.value }) }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">
                    <h4>City: </h4>
                  </label>
                  <select 
                    className="form-control form-control-lg my-2" 
                    id="city" 
                    value={this.state.cityName}
                    onChange={ (e) => this.setState({cityName : e.target.value }) }
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
                <div className="form-group">
                  <label htmlFor="title">
                    <h4> Title: </h4>
                  </label>
                  <input
                    required
                    type="text"
                    id="title"
                    className="form-control"
                    value={this.state.titleOfCompliaint}
                    onChange={(event) => { this.setState({ titleOfCompliaint: event.target.value }) }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">
                    <h4>Missing Date: </h4>
                  </label>
                  <input
                    required
                    type="date"
                    className="form-control"
                    value={this.state.dateOfMissing}
                    onChange={(e) => { this.setState({ dateOfMissing: e.target.value }) }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">
                    <h4>Description: </h4>
                  </label>
                  <textarea
                    required
                    className="form-control"
                    id="description"
                    rows="5"
                    value={this.state.description}
                    onChange={(event) => { this.setState({ description: event.target.value }) }}
                  >
                  </textarea>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn customBtn btn-block" type="submit">Submit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    submitMissingPersonReport: details => dispatch(handleMissingPerson(details))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMissingPerson);
