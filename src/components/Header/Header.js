import React, { Component } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutViaGoogle } from "../../actions/auth";
class Header extends Component {
  render() {
    return (
      <div>

        {this.props.authState ? (
          <nav className="navbar py-3 navbar-expand-lg navbar-dark bg-dark">


            <Link className="brand-logo" to="/"> <i className="fa fa-address-card"></i> CRIME REPORTER</Link>

            <i data-vi="doc"></i>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-2">
                  <Link className="nav-link" to="/user-dashboard"><i className="fa fa-address-card"></i> Dashboard</Link>
                </li>
                <li className="nav-item mr-2">
                  <Link className="nav-link" to="/reports"> <i className="fa fa-file alt"></i> Reports</Link>
                </li>
                {/* <li className="nav-item mr-2">
                  <Link className="nav-link" to="/sign-in"> <i className="fa fa-users"></i> Sign in</Link>
                </li> */}
                <li className="nav-item mr-2">
                  <button className="btn btn-sm btn-success" onClick={this.props.logoutViaGoogle}> <i className="fa fa-sign-out-alt"></i> Logout </button>
                </li>
              </ul>
            </div>
          </nav>
        ) : (

            <nav className="navbar py-3 navbar-expand-lg navbar-dark bg-dark">


              <Link className="brand-logo" to="/"> <i className="fa fa-address-card"></i> CRIME REPORTER</Link>
              
              <i data-vi="doc"></i>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  {/* <li className="nav-item mr-2">
                    <Link className="nav-link" to="/user-dashboard"><i className="fa fa-address-card"></i> Dashboard</Link>
                  </li> */}
                  <li className="nav-item mr-2">
                    <Link className="nav-link" to="/reports"> <i className="fa fa-file alt"></i> Reports</Link>
                  </li>
                  <li className="nav-item mr-2">
                    <Link className="nav-link" to="/sign-in"> <i className="fa fa-users"></i> Sign in</Link>
                  </li>
                  <li className="nav-item mr-2">
                    <button className="btn btn-sm btn-success" onClick={this.props.logoutViaGoogle}> <i className="fa fa-sign-out-alt"></i> Logout </button>
                  </li>
                </ul>
              </div>
            </nav>

          )}

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logoutViaGoogle: () => dispatch(logoutViaGoogle())
});

const mapStateToProps = (state) => {
  return {
    authState: state.auth.uid
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
