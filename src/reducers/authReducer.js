import * as Actions from '../actions/auth';

const initialState = {
  loading: false,
  token: '',
  error: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // signup action handlers
    case Actions.SIGNUP_STARED:
      return { ...state, loading: true };
    case Actions.SIGNUP_SUCCESS:
      return { ...state, loading: false, token: payload };
    case Actions.SIGNUP_ERROR:
      return { ...state, loading: false, error: payload };
    // login action handlers
    case Actions.LOGIN_STARTED:
      return { ...state, loading: true };
    case Actions.LOGIN_SUCCESS:
      return { ...state, loading: false, token: payload };
    case Actions.LOGIN_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
