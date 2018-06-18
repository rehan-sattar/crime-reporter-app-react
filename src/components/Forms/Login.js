import React, { Component } from 'react';
import { fire as firebase } from "../firebase/firebase";
import { connect } from "react-redux";
import {BrowserRouter , Route, Link} from "react-router-dom";
import { loginViaGoogle } from "../../actions/auth";
import "./forms.css"

class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      status: false
    }
  }

  loginUser(event) {
    event.preventDefault();
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.setState({
          email: '',
          password: '',
          status: true,
          error: ''
        })
      }).catch(error => {
        this.setState({
          error: error.message
        })
      })
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <h1 className="text-muted text-center"> Login  </h1>
          <div className="row justify-content-center mt-3">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <form onSubmit={this.loginUser.bind(this)}>
                <input
                  type="email"
                  placeholder="Email: example@gmail.com"
                  className="form-control form-control-lg my-2"
                  required
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="User Password"
                  className="form-control form-control-lg my-3"
                  required
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <button type="submit" className="btn btn-block btn-lg customBtn"> Login</button>
              </form>
              <h3 className="text-muted text-center my-2">OR</h3>
              <button className="btn btn-block mt-3 btn-lg customBtn02" onClick={this.props.startLogin}> Login With Google</button>
            </div>
          </div>
          {this.state.status === true ? <p className="lead mt-3 text-success text-center">User Logged In Successfully</p> : <p className="lead text-danger mt-3 text-center"> {this.state.error} </p>}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(loginViaGoogle())
});

export default connect(undefined, mapDispatchToProps)(LoginUser);
