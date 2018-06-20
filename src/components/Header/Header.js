import React, { Component } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutViaGoogle } from "../../actions/auth";
class Header extends Component {
  render() {
    return (
      <nav class="navbar py-3 navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">
          <Link className="brand-logo" to="/">CRIME REPORTER</Link>
        </a>
        <i data-vi="doc"></i>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li className="nav-item mr-2">
              <Link className="nav-link" to="/user-dashboard"><i className="fa fa-address-card"></i> Dashboard</Link>
            </li>
            <li class="nav-item mr-2">
              <Link className="nav-link" to="/reports"> <i className="fa fa-file alt"></i> Reports</Link>
            </li>
            <li class="nav-item mr-2">
              <Link className="nav-link" to="/sign-in"> <i className="fa fa-users"></i> Sign in</Link>
            </li>
            <li className="nav-item mr-2">
              <button className="btn btn-sm btn-success" onClick={this.props.logoutViaGoogle}> <i className="fa fa-sign-out-alt"></i> Logout </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logoutViaGoogle: () => dispatch(logoutViaGoogle())
});

const mapStateToProps = (state) => ({
  allData: JSON.stringify(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
