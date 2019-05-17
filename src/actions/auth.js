import {
  fire as firebase,
  googleAuthProvider
} from '../components/firebase/firebase';

export const loginViaGoogle = () => {
  console.log('Login Via Google');
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogin = state => {
  const { email, password } = state;
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('User Response: ', response.user);
        dispatch({
          type: 'LOGIN_WITH_EMAIL_PASS',
          payload: response.user.uid
        });
      })
      .catch(error => {
        dispatch({
          type: 'Error',
          payload: error.message
        });
      });
  };
};

export const startSignIn = ({ email, password }) => dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      dispatch({
        type: 'SOMETHING'
      });
    });
};

export const login = uid => ({
  type: 'LOGIN',
  uid
});

export const logout = () => ({
  type: 'LOGOUT'
});

export const logoutViaGoogle = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
