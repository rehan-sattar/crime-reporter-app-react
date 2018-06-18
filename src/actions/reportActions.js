import {
  fire as firebase
} from "../components/firebase/firebase";
import { detach } from "retry-axios";

export function handleCrimeReport(details) {
  return (dispatch) => {
    console.log(firebase.database().ref('reports').child(details.cityName));
    firebase.database().ref("reports").child(details.cityName).child("crimes").push(details)
      .then(() => dispatch({
        type: "CRIME_REPORT",
        payload: { ...details }
      }))
      .catch(error => console.log('error: ', error));
  }

};

export function handeComplaints(details) {
  return (dispatch) => {
    firebase.database().ref("reports").child(details.cityName).child("complaints").push(details)
      .then(() => dispatch({
        type: "COMPLAINT_REPORT",
        payload: { ...details }
      }))
      .catch(error => console.log('error: ', error));
  }



};

export function handleMissingPerson(details) {
  return (dispatch) => {
    firebase.database().ref("reports").child(details.cityName).child("missing_person").push(details)
      .then(() => dispatch({
        type: "MISSING_PERSON",
        payload: { ...details }
      }))
      .catch(error => console.log('error: ', error));
  }
};


const setReports = (reportType) => {
  return {
    type: 'SET_REPORT',
    payload: reportType
  };
};

export const startSetReport = () => {
  return (dispatch) => {
    return firebase.database().ref('reports').on('value', (snapshot) => {
      dispatch(setReports(snapshot.val()))
    });
  }
}
