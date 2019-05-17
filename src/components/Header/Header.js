import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutViaGoogle } from '../../actions/auth';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class='navbar navbar-expand-lg navbar-light bg-dark'>
          <a class='navbar-brand brand-logo' href='#'>
            Crime Rates Tracker
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon' />
          </button>
          <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div class='navbar-nav'>
              <a class='nav-item nav-link active' href='#'>
                Reports <span class='sr-only'>(current)</span>
              </a>
              <a class='nav-item nav-link' href='#'>
                Sign in
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('STATE: :: ', state);
  return {
    authState: state.auth.uid
  };
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header);
