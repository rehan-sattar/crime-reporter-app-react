import * as firebase from 'firebase';
import {
  ADD_REPORT_STARTED,
  ADD_REPORT_SUCCESS,
  ADD_REPORT_ERROR,
  FETCH_REPORTS_STARTED,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_ERROR
} from './types';

export const addReport = (
  { title, reportType, cityName, description },
  callback
) => async dispatch => {
  dispatch({ type: ADD_REPORT_STARTED });
  const user = firebase.auth().currentUser;
  const timeStamp = new Date().getTime();
  const reportData = {
    title,
    reportType,
    cityName,
    description,
    createdBy: user.uid,
    createdAt: timeStamp
  };
  try {
    await firebase
      .database()
      .ref('/reports')
      .push(reportData);
    dispatch({ type: ADD_REPORT_SUCCESS });
    callback('success');
  } catch (err) {
    dispatch({
      type: ADD_REPORT_ERROR,
      errMessage: 'Something went wrong while adding report.'
    });
    callback('error');
  }
};

export const getAllReports = () => async dispatch => {
  try {
    dispatch({ type: FETCH_REPORTS_STARTED });
    firebase
      .database()
      .ref('/reports')
      .on('value', snapshot => {
        const dataObj = snapshot.val();
        const data = sortAndFormatData(dataObj);
        dispatch({ type: FETCH_REPORTS_SUCCESS, payload: data });
      });
  } catch (err) {
    dispatch({ type: FETCH_REPORTS_ERROR, payload: err.message });
  }
};

const sortAndFormatData = dataObj => {
  let data = [];
  if (dataObj) {
    for (let [id, props] of Object.entries(dataObj)) {
      data.push({
        ...props,
        id,
        createdAt: new Date(props.createdAt)
      });
    }
    return data.sort((x, y) => y.createdAt - x.createdAt);
  } else {
    return data;
  }
};
