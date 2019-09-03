import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/auth';
import useForm from '../../hooks/useForm';
import CountryDropDown from '../helpers/CountryDropDown';

const SignIn = ({ loading, errMessage }) => {
  const [name, setName] = useForm('');
  const [email, setEmail] = useForm('');
  const [password, setPassword] = useForm('');
  const [cityName, setCityName] = useForm('New York');

  const signIn = e => {
    e.preventDefault();
    // signin code here
    console.table({
      name,
      email,
      password,
      cityName
    });
  };

  return (
    <div className='container mt-5'>
      <h2 className='text-center'>
        <i className='fa fa-users' /> Create an account here..
      </h2>
      <div className='row justify-content-center mt-3'>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          <form onSubmit={signIn}>
            <input
              type='text'
              placeholder='Name'
              className='form-control my-4'
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              className='form-control my-4'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='User Password'
              className='form-control my-4'
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <CountryDropDown
              value={cityName}
              onChange={e => setCityName(e.target.value)}
            />
            {errMessage ? <p>{errMessage}</p> : null}
            <button className='btn btn-block btn-outline-primary mt-4'>
              {!loading ? 'Signin' : 'Wait a moment....'}
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

export default SignIn;
