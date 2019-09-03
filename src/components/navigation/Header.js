import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserLogout } from '../../actions/auth';
import './Header.css';

class Header extends Component {
  state = {
    authenticated: false
  };
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        authenticated: true
      });
    } else {
      this.setState({ authenticated: false });
    }
  }
  render() {
    const { authenticated } = this.state;

    return (
      <div>
        <nav class='navbar navbar-expand-lg navbar-light bg-dark'>
          <a class='navbar-brand brand-logo'>
            <Link to='/' className='brand-logo'>
              <i className='fa fa-address-card mr-2' />
              Crime Rates Tracker
            </Link>
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
            <div class='navbar-nav ml-auto'>
              <Link to='/reports' class='nav-item nav-link active'>
                Reports <span class='sr-only'>(current)</span>
              </Link>
              {authenticated ? (
                <Link to='/user-dashboard' class='nav-item nav-link active'>
                  Dashboard
                </Link>
              ) : null}
              {!authenticated ? (
                <Link to='/sign-in' class='nav-item nav-link'>
                  {' '}
                  Sign in
                </Link>
              ) : (
                <button
                  className='logout-button'
                  onClick={() => getUserLogout()}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  token: authentication.token
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
