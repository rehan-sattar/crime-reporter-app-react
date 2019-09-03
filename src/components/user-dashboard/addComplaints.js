import React from "react";
import "./styles.css"
import { connect } from "react-redux";
import { handeComplaints } from "../../actions/reportActions";

class AddComplaints extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      crimeType: 'complaints',
      description: '',
      cityName : ''
    };
  };

  handleComplaintsReport(event) {
    event.preventDefault();
    this.props.submitComplaintsReport(this.state);
    this.setState({
      name: '',
      email: '',
      titleOfCompliaint: '',
      description: '',
      cityName : ''
    });
  };


  render() {
    return (
      <div>
        <div className="container">
          <div className="card mb-5">
            <div className="card-header bg-dark  text-white text-center">
              <h1> Complaints </h1>
            </div>
            <form onSubmit={this.handleComplaintsReport.bind(this)}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="name">
                    <h4> Name: </h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={(event) => { this.setState({ name: event.target.value }) }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <h4> Email: </h4>
                  </label>
                  <input
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
                  <label htmlFor="description">
                    <h4>Description: </h4>
                  </label>
                  <textarea
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
                <button className="btn btn-block text-white btn-dark">Submit </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    submitComplaintsReport: details => dispatch(handeComplaints(details))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddComplaints);