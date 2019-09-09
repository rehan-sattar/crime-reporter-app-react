import * as firebase from 'firebase';
import { useToasts } from 'react-toast-notifications';
import {
  ADD_REPORT_STARTED,
  ADD_REPORT_SUCCESS,
  ADD_REPORT_ERROR
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
