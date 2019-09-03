import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate } from '../../store/actions/auth';
import { history } from '../../config';
import './forms.css';

class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      status: false
    };
  }

  loginUser = event => {
    event.preventDefault();
    this.login('login');
  };

  loginVieGoogle = () => this.login('google');

  login = type => {
    const { email, password } = this.state;
    this.props.authenticate({ email, password, type });
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/dashboard');
    }
  }

  static AppDetails = () => {
    return (
      <React.Fragment>
        <h1 className='heading-main'>Crime Rates Tracker</h1>
        <p className='lead description'>
          This App allows user to file complaints or missing reports and keep a
          track of it. There are 3 categories that a user can file; Complaint,
          Crime Report and Missing Report and can see all the status of what
          action has been taken by the admin.
        </p>
        <div className='d-flex mt-4'>
          <div className='flex-row'>
            <h5>
              <i className='fa fa-check' />
            </h5>
          </div>
          <div className='flex-row'>
            <h5 className='lead ml-3 disc-point'>
              The system asks the user to enter all the details of the person.
            </h5>
          </div>
        </div>
        <div className='d-flex mt-3'>
          <div className='flex-row'>
            <h5>
              <i className='fa fa-check' />
            </h5>
          </div>
          <div className='flex-row'>
            <h5 className='lead ml-3 disc-point'>
              The users can view the 3 kinds of reports by cities.
            </h5>
          </div>
        </div>
        <div className='d-flex mt-3'>
          <div className='flex-row'>
            <h5>
              <i className='fa fa-check' />
            </h5>
          </div>
          <div className='flex-row'>
            <h5 className='lead ml-3 disc-point'>
              The System allows the user to check for crimes without logging in.
              The User can also check for missing people. However they cannot
              view other user complains
            </h5>
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <section className='my-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7 col-lg-7 col-sm-12 side-showcase'>
                <LoginUser.AppDetails />
              </div>
              <div className='col-md-5 col-lg-5 col-sm-12'>
                <h1 className='text-center mb-4'>
                  <i className='fa fa-user' /> Login
                </h1>
                <form onSubmit={this.loginUser}>
                  <input
                    type='email'
                    placeholder='Email: example@gmail.com'
                    className='form-control form-control-lg my-2'
                    required
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <input
                    type='password'
                    placeholder='User Password'
                    className='form-control form-control-lg my-3'
                    required
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <button
                    type='submit'
                    className='btn btn-block btn-lg bg-dark login-custom-btn'
                  >
                    Lets Start <i className='fa fa-arrow-right ml-2' />
                  </button>
                </form>
                <h3 className='text-center my-2'>OR</h3>
                <button
                  className='btn btn-block mt-3 google_button btn-lg'
                  onClick={this.loginVieGoogle}
                >
                  <i className='fab fa-google mx-1' /> Login With Google
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='container mt-5'>
          {this.state.status === true ? (
            <p className='lead mt-3 text-center'>User Logged In Successfully</p>
          ) : (
            <p className='lead mt-3 text-center'>{this.state.error}</p>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  undefined,
  { authenticate }
)(LoginUser);
