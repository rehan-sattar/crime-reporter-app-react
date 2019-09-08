import * as Actions from '../actions/types';
const initialState = {
  token: '',
  loading: false,
  errMessage: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.AUTH_STARTED:
      return { ...state, loading: true };
    case Actions.AUTH_SUCCESS:
      return { ...state, token: payload, loading: false };
    case Actions.AUTH_ERROR:
      return { ...state, errMessage: payload, loading: false };
    default:
      return state;
  }
};
