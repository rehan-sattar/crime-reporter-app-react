import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../src/components/Header/Header';
export const PrivateRoute = ({
  isAuthenticated,
  component: Component, // aliasing
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <>
          <Header />
          <Component {...props} />
        </>
      ) : (
        <Redirect to='/' />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token
});

export default connect(mapStateToProps)(PrivateRoute);
