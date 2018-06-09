import {
  fire as firebase
} from "../components/firebase/firebase";
export function handleCrimeReport(detials) {
  return (dispatch) => {
    firebase.database().ref("reports").child("crime").push(detials)
      .then(() => dispatch({
        type: "CRIME_REPORT",
        payload: {...detials}
      }))
      .catch(error => console.log('error: ', error));
  }

};

export function handeComplaints(detials) {
  return (dispatch) => {
    firebase.database().ref("reports").child("complaints").push(detials)
      .then(() => dispatch({
        type: "COMPLAINT_REPORT",
        payload: {...detials}
      }))
      .catch(error => console.log('error: ', error));
  }
  
  

};

export function handleMissingPerson(detials) {
  return (dispatch) => {
    firebase.database().ref("reports").child('missing-person').push(detials)
      .then(() => dispatch({
        type: "MISSING_PERSON",
        payload: {...detials}
      }))
      .catch(error => console.log('error: ', error));
  }
};

