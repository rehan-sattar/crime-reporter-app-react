import React, { Component } from 'react';

import LoginUser from "./components/Forms/Login";
import SignInUser from "./components/Forms/SignIn";
import Reports from "./components/reports/reports";
import UserDashboard from "./components/userDashobard/main";
import { fire as firebase } from "./components/firebase/firebase";
import {
  Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import store from "./store"
import createHistory from "history/createBrowserHistory";
import { login, logout } from './actions/auth'
import Header from "./components/Header/Header";
const history = createHistory();
let status = undefined;
class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header status = {status} />
            <Switch>
              <Route exact path="/" component={LoginUser} />
              <Route path="/sign-in" component={SignInUser} />
              <Route path="/reports" component={Reports} />
              <Route path="/user-dashboard" component={UserDashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    console.log('Log in');
    if (history.location.pathname === "/") {
      localStorage.setItem('user',user.uid);
      history.push("/user-dashboard");
    }

  } else {
    console.log('log out');
    history.push("/");
  }
})
export default App;


// 1- get user input and City name
// 2- push data to specific city.auth
// 3- for example 

// let cityName = 'Karachi';
// let crime = 'Complaints';

// let detials = {
//   name: 'Rehan',
//   email: 'rehanSattar117@gmail.com'
// }
// firebase.database().ref('reports').child(cityName).remove(crime);



