import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import "./components/firebase/firebase";

import AppTest from "./AppTest";
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));

// ReactDOM.render( <AppTest /> , document.getElementById('root'));