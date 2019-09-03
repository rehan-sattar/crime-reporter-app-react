import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";
import { Provider } from "react-redux";
import { configObject } from "./config";
import App from "./App";
import store from "./store";
import "./index.css";

// fireabse configeration.
firebase.initializeApp(configObject);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
