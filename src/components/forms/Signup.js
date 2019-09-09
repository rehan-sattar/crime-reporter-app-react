import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/auth';
import useForm from '../../hooks/useForm';
import CountryDropDown from '../common/CountryDropDown';
// import './styles.css';

const Signup = ({ loading, errMessage, authenticate }) => {
  const { values, handleChange, handleSubmit } = useForm(signIn, {
    cityName: 'New York',
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password, cityName } = values;
  function signIn() {
    authenticate(
      {
        email,
        password,
        name,
        cityName
      },
      'signup'
    );
  }
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center mt-2'>
        <div className='col-sm-12 col-md-6 col-lg-6 shadow rounded p-5'>
          <h2 className='text-center pb-3'>
            <i className='fa fa-users' /> Create Account
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Name'
              className='form-control my-4'
              required
              name='name'
              value={name}
              onChange={handleChange}
            />
            <input
              type='email'
              placeholder='Email'
              className='form-control my-4'
              required
              name='email'
              value={email}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='User Password'
              className='form-control my-4'
              required
              name='password'
              value={password}
              onChange={handleChange}
            />
            <CountryDropDown
              value={cityName}
              onChange={handleChange}
              name='cityName'
            />
            {errMessage ? (
              <p className='text-center text-danger my-2'>{errMessage}</p>
            ) : null}
            <button className='btn btn-block btn-outline-primary mt-4'>
              {!loading ? 'Sign In' : 'Wait a moment....'}
            </button>
            <p className='mt-3'>
              Already have an account? <Link to='/'>Login please</Link>{' '}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStatToProps = ({ auth }) => ({
  loading: auth.loading,
  errMessage: auth.errMessage,
  token: auth.token
});

export default connect(
  mapStatToProps,
  { authenticate }
)(Signup);
