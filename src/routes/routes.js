import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { history } from "../config";
import LoginUser from "../components/forms/Login";
import SignInUser from "../components/forms/SignIn";

export default class AppRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginUser} />
          <Route path="/signin" component={SignInUser} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/reports" component={Reports} />
          <Route path="/dashboard" component={UserDashboard} />
        </Switch>
      </Router>
    );
  }
}
