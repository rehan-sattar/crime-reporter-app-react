import React, { Component } from 'react';
import LoginUser from './components/Forms/Login';
import SignInUser from './components/Forms/SignIn';
import Reports from './components/reports/reports';
import UserDashboard from './components/userDashobard/main';
import { fire as firebase } from './components/firebase/firebase';
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './components/Header/Header';
import AdminDashboard from './AdminDashboard/AdminDashboard';
// import Admin_login from './AdminDashboard/Admin_login';
const history = createHistory();
let status = undefined;
class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header status={status} />
            <Switch>
              <Route exact path='/' component={LoginUser} />
              <Route path='/sign-in' component={SignInUser} />
              <Route path='/admin-dashboard' component={AdminDashboard} />
              {/* <Route path='/admin-login' component={Admin_login} /> */}
              <Route path='/reports' component={Reports} />
              <Route path='/user-dashboard' component={UserDashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('logged in!');
    if (history.location.pathname === '/') {
      localStorage.setItem('user', user.uid);
      history.push('/user-dashboard');
    }
  } else {
    console.log('Logged out!');
    history.push('/');
  }
});
export default App;
