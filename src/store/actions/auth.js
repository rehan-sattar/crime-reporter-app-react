import { AUTH_STARTED, AUTH_ERROR, AUTH_SUCCESS } from "./types";
import { history } from "../../config";
import firebase from "firebase";

export const authenticate = ({ email, password, type }) => async dispatch => {
  dispatchAction(AUTH_STARTED);
  let authObj = {};
  try {
    if (type === "signup")
      authObj = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    else if (type === "google") {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      authObj = await firebase.auth().signInWithPopup(googleAuthProvider);
    } else
      authObj = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    const token = authObj.user.uid;
    localStorage.setItem("token", token);
    history.push("/dashboard");
    dispatchAction(AUTH_SUCCESS, token);
  } catch (err) {
    dispatchAction(AUTH_ERROR, err.message);
  }
};

export const getUserLogout = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.removeItem("token");
      history.push("/");
    });
};

const dispatchAction = (type, payload = null) => ({
  type,
  payload
});
