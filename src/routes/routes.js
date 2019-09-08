import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../config';
import Signup from '../components/forms/Signup';
import Home from '../components/home';
import Header from '../components/navigation/Header';
import Dashboard from '../components/user-dashboard';
// import PrivateRoute from '../hocs/PrivateRoute';

export default class AppRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/dashboard' component={Dashboard} />
          {/* <Route path="/admin" component={AdminDashboard} />
          <Route path="/dashboard" component={UserDashboard} /> */}
        </>
      </Router>
    );
  }
}
