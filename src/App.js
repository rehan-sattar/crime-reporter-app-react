import React, { Component } from 'react';
import Header from './components/Header/Header'
import LoginUser from "./components/Forms/Login";
import SignInUser from "./components/Forms/SignIn";
import Reports from "./components/reports/reports"
import UserDashboard from "./components/userDashobard/main"
import { fire as firebase } from "./components/firebase/firebase";
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { create } from 'domain';

const history = createHistory();
// let status = false;
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={LoginUser} />
            <Route path="/sign-in" component={SignInUser} />
            <Route path="/reports" component={Reports} />
            <Route path="/user-dashboard" component={UserDashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('Log in');
    if (history.location.pathname === "/") {
      history.push("/user-dashboard");
    }

  } else {
    console.log('log out');
    history.push("/");
  }
})
export default App;
