import { fire as firebase, googleAuthProvider } from "../components/firebase/firebase";
export const loginViaGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};


export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const logout = () => ({
  type: 'LOGOUT'
})

export const logoutViaGoogle = () => {
  return () => {
    return firebase.auth().signOut();
  };
};


