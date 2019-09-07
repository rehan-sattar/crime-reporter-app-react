import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    auth
  }),
  {
    auth: {
      token: localStorage.getItem('token'),
      loading: false,
      errMessage: ''
    }
  },
  composeEnhancers(applyMiddleware(thunk))
);
