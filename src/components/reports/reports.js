import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Crime from "./crime";
import Complaints from "./complaints";
import MissingPerson from "./missing-person";
import "./reports.css"
class AllReports extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="container">
              <h1 className="text-muted text-center">All Reports Are here</h1>
              <hr />
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <Link className="btn btn-block customBtn btn-lg" to="/reports/crime">Crime Reports</Link>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <Link className="btn btn-block customBtn btn-lg" to="/reports/complaints">Complaints Reports</Link>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <Link className="btn btn-block customBtn btn-lg" to="/reports/missing-person">Missing Person</Link>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <Route path="/reports/" exact component={Crime} />
                  <Route path="/reports/crime" component={Crime} />
                  <Route path="/reports/complaints" component={Complaints} />
                  <Route path="/reports/missing-person" component={MissingPerson} />
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    )
  };
};

export default AllReports;
