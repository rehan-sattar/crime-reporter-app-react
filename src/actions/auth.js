import {
  fire as firebase,
  googleAuthProvider
} from '../components/firebase/firebase';
import { history } from '../App';

export const loginViaGoogle = () => {
  return dispatch => {
    dispatch({
      type: LOGIN_STARTED
    });
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(response => {
        localStorage.setItem('token', response.user.uid);
        history.push('/user-dashboard');
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.user.uid
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_ERROR,
          payload: err
        });
      });
  };
};

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const startLogin = state => {
  const { email, password } = state;
  return dispatch => {
    dispatch({
      type: LOGIN_STARTED
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        // saving the token in localStorage.
        localStorage.setItem('token', response.user.id);
        history.push('/user-dashboard');
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.user.uid
        });
      })
      .catch(error => {
        dispatch({
          type: LOGIN_ERROR,
          payload: error.message
        });
      });
  };
};

export const SIGNUP_STARED = 'SIGNUP_STARED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const startSignIn = ({ email, password }) => dispatch => {
  dispatch({
    SIGNUP_STARED
  });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      localStorage.setItem('token', response.user.id);
      history.push('/user-dashboard');
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.user.uid
      });
    })
    .catch(error => {
      dispatch({
        type: SIGNUP_ERROR,
        payload: error.message
      });
    });
};

export const getUserLogout = () => {
  console.log('Clicked');
  return firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.removeItem('token');
      history.push('/');
    });
};
