import { history } from "../../config";
import firebase from "firebase";
import { AUTH_ERROR, AUTH_SUCCESS } from "./types";

export const authenticate = ({ email, password, type }) => async dispatch => {
  let auth = {};
  try {
    if (type === "signup")
      auth = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
    else if (type === "google")
      authObj = await firebase.auth().signInWithPopup(googleAuthProvider);
    else
      auth = await firebase.auth().signInWithEmailAndPassword(email, password);
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
