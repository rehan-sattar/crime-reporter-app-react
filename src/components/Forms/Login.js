import React, { Component } from 'react';
import { fire as firebase } from "../firebase/firebase";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
      .then(() => {
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

        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7 col-sm-12 text-white">
                <h3 className="display-4"> <i className="fa fa-register"></i> Crime Reporter</h3>
                <p className="lead">
                  The System allows the user to check for
                  crimes without logging in. The User can also check for
                  missing people. However they cannot view other user
                 complains. </p>
                <div className="d-flex mt-4">
                  <div className="flex-row">
                    <h5><i className="fa fa-check"></i> </h5>
                  </div>
                  <div className="flex-row">
                    <h5 className="lead ml-3"> The system asks the user to enter all the
                    details of the person.</h5> </div>
                </div>
                <div className="d-flex mt-3">
                  <div className="flex-row">
                    <h5> <i className="fa fa-check"></i></h5>
                  </div>
                  <div className="flex-row">
                      <h5 className="leard ml-3">The users can view the 3 kinds of reports by cities.</h5>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <div className="flex-row">
                    <h5><i className="fa fa-check"></i> </h5>
                  </div>
                  <div className="flex-row">
                    <h5 className="lead ml-3"> The System allows the user to check for
                      crimes without logging in. The User can also check for
                      missing people. However they cannot view other user
                      complains</h5> </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 col-sm-12">
                <h1 className="text-center text-white mb-4"> <i className="fa fa-user"></i> Login </h1>
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
                  <button type="submit" className="btn btn-block btn-lg bg-dark text-white login-custom-btn">Lets Start <i className="fa fa-arrow-right ml-2"></i> </button>
                </form>
                <h3 className="text-white text-center my-2">OR</h3>
                <button className="btn btn-block mt-3 google_button btn-lg" onClick={this.props.startLogin}> <i className="fab fa-google mx-1"></i> Login With Google</button>
              </div>
            </div>
          </div>
        </section>
        <div className="container mt-5">
          {this.state.status === true ? <p className="lead mt-3 text-white text-center">User Logged In Successfully</p> : <p className="lead text-white mt-3 text-center"> {this.state.error} </p>}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(loginViaGoogle())
});

export default connect(undefined, mapDispatchToProps)(LoginUser);
