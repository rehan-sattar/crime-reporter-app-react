import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import reportReducer from "./reducers/reportReducer";
import authReducer from "./reducers/authReducer";
import AdminReducer from "./reducers/AdminReducer";

export default createStore(
  combineReducers({
    report: reportReducer,
    auth : authReducer,
    admin: AdminReducer
  }), applyMiddleware(thunk, promiseMiddleware())
);
