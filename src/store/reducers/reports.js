import * as Actions from '../actions/types';
const initialState = {
  loading: false,
  data: [],
  errMessage: '',
  fetching: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.ADD_REPORT_STARTED:
      return { ...state, loading: true, errMessage: '' };
    case Actions.ADD_REPORT_SUCCESS:
      return { ...state, loading: false };
    case Actions.ADD_REPORT_ERROR:
      return { ...state, loading: false, errMessage: payload };
    case Actions.FETCH_REPORTS_STARTED:
      return { ...initialState, fetching: true };
    case Actions.FETCH_REPORTS_SUCCESS:
      return { ...state, fetching: false, data: payload };
    case Actions.FETCH_REPORTS_ERROR:
      return { ...state, fetching: false, errMessage: payload };
    default:
      return state;
  }
};
