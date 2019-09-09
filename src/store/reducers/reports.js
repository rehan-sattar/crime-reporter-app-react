import * as Actions from '../actions/types';
const initialState = {
  loading: false,
  data: [],
  errMessage: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.ADD_REPORT_STARTED:
      return { ...state, loading: true, errMessage: '' };
    case Actions.ADD_REPORT_SUCCESS:
      return { ...state, loading: false };
    case Actions.ADD_REPORT_ERROR:
      return { ...state, loading: false, errMessage: payload };
    default:
      return state;
  }
};
