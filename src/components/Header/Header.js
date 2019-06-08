import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutViaGoogle } from '../../actions/auth';
import './Header.css';

class Header extends Component {
  state = {
    authenticated: false
  };
  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user) {
      this.setState({
        authenticated: true
      });
    } else {
      this.setState({ authenticated: false });
    }
  }
  render() {
    return (
      <div>
        <nav class='navbar navbar-expand-lg navbar-light bg-dark'>
          <Link to='/'>
            <a class='navbar-brand brand-logo'>
              <i className='fa fa-address-card mr-2' />
              Crime Rates Tracker
            </a>
          </Link>
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
              <Link to='/reports' class='nav-item nav-link active'>
                Reports <span class='sr-only'>(current)</span>
              </Link>
              <Link to='/sign-in' class='nav-item nav-link'>
                {' '}
                Sign in
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authState: state.auth.uid
  };
};

export default connect(mapStateToProps)(Header);
