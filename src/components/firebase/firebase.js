import firebase from "firebase";
var config = {
  apiKey: "AIzaSyD2YZJe2z4KG5c4cCPQpUEGx7FqFVu6LIw",
  authDomain: "crime-report-application.firebaseapp.com",
  databaseURL: "https://crime-report-application.firebaseio.com",
  projectId: "crime-report-application",
  storageBucket: "crime-report-application.appspot.com",
  messagingSenderId: "598590180628"
};
const fire = firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

// console.log(database.ref().child("reports").child('crime').push({
//   name: 'rehan',
//   Age: 12
// }).then(() => {
//   console.log('Successfully Written!');
// }).catch((error) => console.log(error)))

// console.log(database.ref().child("reports").child('complaints').push({
//   name: 'Soha',
//   Age: 20
// }).then(() => {
//   console.log('Successfully Written!');
// }).catch((error) => console.log(error)))

database.ref().child('reports').child("crime")
  .once('value')
  .then((snapshot => {
    const crimeReports = [];

    snapshot.forEach((childSnapshot) => {
      crimeReports.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
  })).catch(error => console.log('Error:', error));

database.ref().child('reports').child("complaints")
  .once('value')
  .then((snapshot => {
    const crimeReports = [];

    snapshot.forEach((childSnapshot) => {
      crimeReports.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
  })).catch(error => console.log('Error:', error));


database.ref().child('reports').child("missing-person")
  .once('value')
  .then((snapshot => {
    const crimeReports = [];

    snapshot.forEach((childSnapshot) => {
      crimeReports.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
  })).catch(error => console.log('Error:', error));

// console.log(database.ref().child("reports").child('missin-person').push({
//   name: 'Neha',
//   Age: 20
// }).then(() => {
//   console.log('Successfully Written!');
// }).catch((error) => console.log(error)))


database.ref().child('reports').child('crime')
  .on('value', (snapshot) => {
    const crimeArray = [];

    snapshot.forEach((childSnapShot) => {
      crimeArray.push({
        id: childSnapShot.key,
        ...childSnapShot.val()
      });
    });

  });


  database.ref().child('reports').child('complaints')
  .on('value', (snapshot) => {
    const complaintsArray = [];

    snapshot.forEach((childSnapShot) => {
      complaintsArray.push({
        id: childSnapShot.key,
        ...childSnapShot.val()
      });
    });

  });


  database.ref().child('reports').child('crime')
  .on('value', (snapshot) => {
    const missingPersonArray = [];

    snapshot.forEach((childSnapShot) => {
      missingPersonArray.push({
        id: childSnapShot.key,
        ...childSnapShot.val()
      });
    });
  });

export { auth, fire, googleAuthProvider };
