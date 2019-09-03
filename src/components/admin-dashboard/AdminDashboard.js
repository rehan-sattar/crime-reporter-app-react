import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Complaints_Status from './complaints_status';
import Missing_person_status from './missing_person_status';
import Crime_Status from './crime_status';
import Stats from './stats';

let history = createHistory();
class AdminDashboard extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <div className='container mt-5'>
            <h1 className='text-center'>Welcome to Administration</h1>
            <hr />
            <div className='row'>
              <div className='col-md-3 col-lg-3 col-sm-12'>
                <Link
                  className='btn btn-block btn-links bg-dark btn-lg'
                  to='/admin-dashboard/crime_status/'
                >
                  Crime Report
                </Link>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-12'>
                <Link
                  className='btn btn-block btn-links bg-dark btn-lg'
                  to='/admin-dashboard/complaints_status'
                >
                  {' '}
                  Complaints Reports
                </Link>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-12'>
                <Link
                  className='btn btn-block btn-dark btn-links btn-lg'
                  to='/admin-dashboard/missing_person_status'
                >
                  {' '}
                  Missing Person
                </Link>
              </div>
              <div className='col-md-3 col-lg-3 col-sm-12'>
                <Link
                  className='btn btn-block btn-dark btn-links btn-lg'
                  to='/admin-dashboard/stats'
                >
                  {' '}
                  Statistics
                </Link>
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <Route
                  path='/admin-dashboard/'
                  exact
                  component={Crime_Status}
                />
                <Route
                  path='/admin-dashboard/crime_status'
                  component={Crime_Status}
                />
                <Route
                  path='/admin-dashboard/complaints_status'
                  component={Complaints_Status}
                />
                <Route
                  path='/admin-dashboard/missing_person_status'
                  component={Missing_person_status}
                />
                <Route path='/admin-dashboard/stats' component={Stats} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default AdminDashboard;
