import { fire as firebase } from "../components/firebase/firebase";
export function handleCrimeReport(detials) {
  return () => {
    firebase.database().ref().child("/crime").push(detials)
      .then(response => console.log('perfectly written'))
      .catch(error => console.log('error: ', error));
  }

};


export function handeComplaints(detials) {
  return () => {
    firebase.database().ref().child("/complaints").push(detials)
      .then(response => console.log('perfectly written'))
      .catch(error => console.log('error: ', error));
  }
  
};

export function handleMissingPerson(detials) {
  return () => {
    firebase.database().ref().child("/missing-person").push(detials)
      .then(response => console.log('perfectly written'))
      .catch(error => console.log('error: ', error));
  }

};
