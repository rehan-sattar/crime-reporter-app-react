import {createStore, combineReducers ,applyMiddleware} from "redux";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import reportReducer from "./reducers/reportReducer";

export default createStore(
  combineReducers({
    report: reportReducer,
    user: userReducer
  }), applyMiddleware(thunk , promiseMiddleware())
);
