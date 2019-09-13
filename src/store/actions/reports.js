import * as firebase from 'firebase';
import { sortAndFormatData } from './utils';
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

export const getReports = filterUserReports => async dispatch => {
  try {
    dispatch({ type: FETCH_REPORTS_STARTED });
    const user = firebase.auth().currentUser;
    const uid = user ? user.uid : localStorage.getItem('token');
    firebase
      .database()
      .ref('/reports')
      .on('value', snapshot => {
        const dataObj = snapshot.val();
        const data = sortAndFormatData(dataObj);
        if (filterUserReports) {
          dispatch({
            type: FETCH_REPORTS_SUCCESS,
            payload: [...data.filter(r => r.createdBy === uid)]
          });
        } else {
          dispatch({ type: FETCH_REPORTS_SUCCESS, payload: data });
        }
      });
  } catch (err) {
    dispatch({ type: FETCH_REPORTS_ERROR, payload: err.message });
  }
};
