import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

const Header = props => {
  const { token } = props;
  console.log('PROPS:::', props);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (token || localStorage.getItem('token')) setAuthenticated(true);
  }, []);

  const getUserLogout = () => {};

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
      <a className='navbar-brand brand-logo'>
        <Link to='/' className='brand-logo'>
          <i className='fa fa-address-card mr-2' />
          Crime Rates Tracker
        </Link>
      </a>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav ml-auto'>
          <Link to='/reports' className='nav-item nav-link active'>
            Reports <span className='sr-only'>(current)</span>
          </Link>
          {authenticated ? (
            <Link to='/user-dashboard' className='nav-item nav-link active'>
              Dashboard
            </Link>
          ) : null}
          {!authenticated ? (
            <Link to='/signin' className='nav-item nav-link'>
              Sign in
            </Link>
          ) : (
            <button className='logout-button' onClick={getUserLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({
  token: auth.token
});

export default connect(mapStateToProps)(Header);
