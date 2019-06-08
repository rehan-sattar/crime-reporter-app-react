import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Crime from './crime';
import Complaints from './complaints';
import MissingPerson from './missing-person';
import './reports.css';
class AllReports extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div className='container mt-5'>
              <h1 className='text-white text-center'>
                {' '}
                <i className='fa fa-address-book' /> All Reports Are here
              </h1>
              <hr />
              <div className='row'>
                <div className='col-md-4 col-lg-4 col-sm-12 fixed'>
                  <Link
                    className='btn btn-block bg-dark coustum-link btn-lg'
                    to='/reports/crime'
                  >
                    Crime Reports
                  </Link>
                  <Link
                    className='btn btn-block bg-dark coustum-link btn-lg'
                    to='/reports/complaints'
                  >
                    Complaints Reports
                  </Link>
                  <Link
                    className='btn btn-block bg-dark coustum-link btn-lg'
                    to='/reports/missing-person'
                  >
                    Missing Person
                  </Link>
                </div>
                <div className='col-md-8 col-lg-8 col-sm-12'>
                  <Route path='/reports/' exact component={Crime} />
                  <Route path='/reports/crime' component={Crime} />
                  <Route path='/reports/complaints' component={Complaints} />
                  <Route
                    path='/reports/missing-person'
                    component={MissingPerson}
                  />
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default AllReports;
