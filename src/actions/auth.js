import { fire as firebase, googleAuthProvider } from "../components/firebase/firebase";
export const loginViaGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logoutViaGoogle = () => {
  return () => {
    return firebase.auth().signOut();
  };
};


