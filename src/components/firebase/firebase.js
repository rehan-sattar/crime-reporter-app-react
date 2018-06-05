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
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
export { auth , fire, googleAuthProvider};
