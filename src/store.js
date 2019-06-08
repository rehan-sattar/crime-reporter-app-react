import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reportReducer from './reducers/reportReducer';
import authentication from './reducers/authReducer';
import AdminReducer from './reducers/AdminReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    report: reportReducer,
    authentication,
    AdminReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);
