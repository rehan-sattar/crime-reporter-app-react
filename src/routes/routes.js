import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LoginUser from "../components/Forms/Login";
import SignInUser from "../components/Forms/SignIn";

export default class AppRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginUser} />
          <Route path="/sign-in" component={SignInUser} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
          <Route path="/reports" component={Reports} />
          <Route path="/user-dashboard" component={UserDashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}
