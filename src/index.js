import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import  { startSetReport } from "./actions/reportActions";
import "./components/firebase/firebase";

import AppTest from "./AppTest";
store.dispatch(startSetReport());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
