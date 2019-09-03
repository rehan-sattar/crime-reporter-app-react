import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./forms.css";

class SignInUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      cityName: "select",
      status: false,
      error: ""
    };
  }

  // creation of Sign In method:
  createAccount(event) {
    event.preventDefault();
    const { email, password } = this.state;
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <h1 className="text-center text-white">
            <i className="fa fa-users" /> Lets Get Started
          </h1>
          <div className="row justify-content-center mt-3">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <form onSubmit={this.createAccount.bind(this)}>
                <input
                  type="text"
                  placeholder="User Name"
                  className="form-control form-control-lg my-2"
                  required
                  value={this.state.name}
                  onChange={event => {
                    this.setState({ name: event.target.value });
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control form-control-lg my-2"
                  required
                  value={this.state.email}
                  onChange={event => {
                    this.setState({ email: event.target.value });
                  }}
                />
                <input
                  type="password"
                  placeholder="User Password"
                  className="form-control form-control-lg my-3"
                  required
                  value={this.state.password}
                  onChange={event => {
                    this.setState({ password: event.target.value });
                  }}
                />
                <select
                  value={this.state.cityName}
                  onChange={event => {
                    if (event.target.value === "select") {
                      console.log("please Enter City name");
                    } else {
                      this.setState({
                        cityName: event.target.value
                      });
                    }
                  }}
                  className="form-control form-control-lg my-2"
                >
                  <option value="cityName" className="text-muted">
                    Select City
                  </option>
                  <option value="new york"> New York</option>
                  <option value="los Angeles"> Los Angeles </option>
                  <option value="Chicago"> Chicago </option>
                  <option value="houston"> Houston </option>
                  <option value="Philadelphia"> Philadelphia </option>
                  <option value="phoenix"> Phoenix </option>
                  <option value="San Antonio"> San Antonio </option>
                  <option value="San Diego"> San Diego </option>
                  <option value="Dallas"> Dallas </option>
                  <option value="San Jose">San Jose </option>
                </select>
                <button
                  className="btn btn-block btn-lg bg-dark text-white"
                  type="submit"
                >
                  <h5>Create Account</h5>
                </button>
              </form>
            </div>
          </div>
          {this.state.status === true ? (
            <p className="lead mt-3 text-center text-white">
              <strong>Congratulations! </strong>Account has been created.
              <Link to="/">
                <span className="login__link">Login</span>
              </Link>
              to continue :
            </p>
          ) : (
            <p className="lead text-center mt-3 text-white">
              {this.state.error}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default SignInUser;
