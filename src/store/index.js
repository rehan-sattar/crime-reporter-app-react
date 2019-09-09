import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import reports from './reducers/reports';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    auth,
    reports
  }),
  {
    auth: {
      token: localStorage.getItem('token') || '',
      loading: false,
      errMessage: ''
    }
  },
  composeEnhancers(applyMiddleware(thunk))
);
