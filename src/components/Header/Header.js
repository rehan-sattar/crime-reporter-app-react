import React, { Component } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutViaGoogle } from "../../actions/auth";

class Header extends Component {
  render() {
    return (
      <div>
  
        <nav>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="/">Login</Link>
            </li>
            <li className="nav-item">
              <button onClick={this.props.logoutViaGoogle}> Logout </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-in">Sign in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reports">Reports</Link>
            </li>
          </ul>
        </nav> 
        <h1 className="display-5 text-center heading" >|  CRIME REPORTER  |</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logoutViaGoogle : () => dispatch(logoutViaGoogle())
});

export default connect(undefined, mapDispatchToProps)(Header);
