import { AUTH_STARTED, AUTH_ERROR, AUTH_SUCCESS } from './types';
import { history } from '../../config';
import firebase from 'firebase';

/**
 * @function authenticate
 * @description a general function which handles signup, signIn, and google authentication.
 * @args
 * - data object => { email, password, name. cityName}
 * - type of authentication => signup, google, login.
 */
export const authenticate = (
  { email, password, name, cityName },
  type
) => async dispatch => {
  dispatch(dispatchAction(AUTH_STARTED));
  let authObj = {};
  try {
    if (type === 'signup') {
      authObj = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      // user creation in database.
      await firebase
        .database()
        .ref(`/users/${authObj.user.uid}`)
        .set({ email, name, cityName, id: authObj.user.uid });
    } else if (type === 'google') {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      authObj = await firebase.auth().signInWithPopup(googleAuthProvider);
    } else {
      authObj = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    }

    // token creation and action dispatching
    const token = authObj.user.uid;
    localStorage.setItem('token', token);
    history.push('/dashboard');
    dispatch(dispatchAction(AUTH_SUCCESS, token));
  } catch (err) {
    dispatch(dispatchAction(AUTH_ERROR, err.message));
  }
};

export const getUserLogout = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.removeItem('token');
      history.push('/');
    });
};

const dispatchAction = (type, payload = null) => ({
  type,
  payload
});
