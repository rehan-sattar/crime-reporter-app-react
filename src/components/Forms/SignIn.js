import React, { Component } from 'react';
import "./forms.css";
import { fire as firebase, auth } from "../firebase/firebase";
import AllReports from "../userDashobard/main";
import createHistory from "history/createBrowserHistory";
import { Router,Route } from "react-router-dom";
const history = createHistory();
class SignInUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      cityName: 'select',
      status: false,
      error: ''
    }
  }

  // creation of Sign In method:
  createAccount(event) {
    event.preventDefault();
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          name: '',
          email: '',
          password: '',
          cityName: 'select',
          status: true
        });
        history.push("/user-dashboard");
      }).catch(error => {
        // console.log('Error: ', error);
        this.setState({ error: error.message });
      })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Router history={history}>
            <Route path="/user-dashboard" component={AllReports} />
        </Router>
        <div className="container">
          <h1 className="text-center text-muted"> Lets Get Started </h1>
          <div className="row justify-content-center mt-3">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <form onSubmit={this.createAccount.bind(this)}>
                <input
                  type="text"
                  placeholder="User Name"
                  className="form-control form-control-lg my-2"
                  required
                  value={this.state.name}
                  onChange={(event) => { this.setState({ name: event.target.value }) }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control form-control-lg my-2"
                  required
                  value={this.state.email}
                  onChange={(event) => { this.setState({ email: event.target.value }) }}
                />
                <input
                  type="password"
                  placeholder="User Password"
                  className="form-control form-control-lg my-3"
                  required
                  value={this.state.password}
                  onChange={(event) => { this.setState({ password: event.target.value }) }}
                />
                <select
                  value={this.state.cityName}
                  onChange={(event) => {
                    if (event.target.value === "select") {
                      console.log('please Enter City name');
                    } else {
                      this.setState({
                        cityName: event.target.value
                      })
                    }
                  }
                  }
                  className="form-control form-control-lg my-2"
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
                <button className="btn btn-block btn-lg customBtn" type="submit"><h5>Lets Start!</h5></button>
              </form>
            </div>
          </div>
          {this.state.status === true ? <p className="lead mt-3 text-center text-success">Account has been created. </p> : <p className="lead text-center mt-3 text-danger">{this.state.error}</p>}
        </div>
      </div>
    );
  }
}

export default SignInUser;
