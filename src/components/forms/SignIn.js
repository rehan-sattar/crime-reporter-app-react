import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CountryDropDown from '../helpers/CountryDropDown';
import './forms.css';

const SignIn = ({ loading, errMessage }) => {
  const [name, setName] = useForm('');
  const [email, setEmail] = useForm('');
  const [password, setPassword] = useForm('');
  const [cityName, setCityName] = useForm('');

  const signIn = e => {
    e.preDefault();
    // signin code here
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>
        <i className='fa fa-users' /> Lets Get Started
      </h1>
      <div className='row justify-content-center mt-3'>
        <div className='col-sm-12 col-md-6 col-lg-6'>
          <form onSubmit={signIn}>
            <input
              type='text'
              placeholder='Name'
              className='form-control my-2'
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              className='form-control my-2'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='User Password'
              className='form-control my-3'
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <CountryDropDown
              value={cityName}
              onChange={e => setCityName(e.target.value)}
            />
            {errMessage ? <p>{errMessage}</p> : null}
            <button className='btn btn-block btn-dark' type='submit'>
              {!loading ? 'Signin' : 'Wait a moment....'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
