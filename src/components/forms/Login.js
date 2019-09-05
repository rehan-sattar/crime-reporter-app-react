import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/auth';
import { history } from '../../config';
import useForm from '../../hooks/useForm';

const Login = ({ authenticate, loading, errMessage }) => {
  const { values, handleChange, handleSubmit } = useForm(login);
  const { email, password } = values;
  // login via google handler.
  function loginVieGoogle() {
    authenticate({}, 'google');
  }
  // login via email, password handler.
  function login() {
    authenticate({ email, password });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) history.push('/dashboard');
  }, []);

  return (
    <section className='my-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 col-lg-5 col-sm-12'>
            <h1 className='text-center mb-4'>
              <i className='fa fa-user' /> Login
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                type='email'
                placeholder='Email: example@gmail.com'
                className='form-control form-control-lg my-2'
                name='email'
                required
                value={email}
                onChange={handleChange}
              />
              <input
                type='password'
                placeholder='User Password'
                className='form-control form-control-lg my-3'
                name='password'
                required
                value={password}
                onChange={handleChange}
              />
              <button className='btn btn-block btn-outline-primary'>
                {loading ? (
                  `Loging in...`
                ) : (
                  <>
                    Lets Start <i className='fa fa-arrow-right ml-2' />
                  </>
                )}
              </button>
            </form>
            <button
              className='btn btn-block mt-3 btn-danger'
              onClick={loginVieGoogle}>
              <i className='fab fa-google mx-2' />
              Login using Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ auth: { loading, errMessage } }) => ({
  errMessage,
  loading
});

export default connect(
  mapStateToProps,
  { authenticate }
)(Login);
