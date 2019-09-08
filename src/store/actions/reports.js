import { fire as firebase } from '../../components/firebase/firebase';

export function handleCrimeReport(details) {
  return dispatch => {
    firebase
      .database()
      .ref('reports')
      .child(details.cityName)
      .child('crimes')
      .push(details)
      .then(() => {
        alert('Successfully submitted!');
        dispatch({
          type: 'CRIME_REPORT',
          payload: { ...details }
        });
      });
  };
}

export function handeComplaints(details) {
  return dispatch => {
    firebase
      .database()
      .ref('reports')
      .child(details.cityName)
      .child('complaints')
      .push(details)
      .then(() => {
        alert('Successfully submitted!');
        dispatch({
          type: 'COMPLAINT_REPORT',
          payload: { ...details }
        });
      });
  };
}

export function handleMissingPerson(details) {
  return dispatch => {
    firebase
      .database()
      .ref('reports')
      .child(details.cityName)
      .child('missing_person')
      .push(details)
      .then(() => {
        alert('Successfully submitted!');
        dispatch({
          type: 'MISSING_PERSON',
          payload: { ...details }
        });
      });
  };
}

const setReports = reportType => {
  return {
    type: 'SET_REPORT',
    payload: reportType
  };
};

export const startSetReport = () => {
  return dispatch => {
    firebase
      .database()
      .ref('reports')
      .on('value', snapshot => {
        dispatch(setReports(snapshot.val()));
      });
  };
};
