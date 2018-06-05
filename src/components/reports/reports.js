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
                  <Link className="btn btn-block customBtn btn-lg" to="/crime">Crime Reports</Link>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <Link className="btn btn-block customBtn btn-lg" to="/complaints">Complaints Reports</Link>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                  <Link className="btn btn-block customBtn btn-lg" to="/missing-person">Missing Person</Link>
                </div>
              </div>

              <div className="container">
                <select className="form-control form-control-lg my-2">
                  <option value="cityName" className="text-muted">Select City</option>
                  <option value="new york"> New York</option>
                  <option value="los Angeles"> Los Angeles </option>
                  <option value="Chicago"> Chicago </option>
                  <option value="houston"> Houston </option>
                  <option value="Philadelphia"> Philadelphia </option>
                  <option value="phoenix">  Phoenix </option>
                  <option value="San Antonio">  San Antonio </option>
                  <option value="San Diego">  San Diego </option>
                  <option value="Dallas"> Dallas </option>
                  <option value="San Jose">San Jose </option>
                </select>
              </div>

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <Route path="/reports/" component={Crime} />
                  <Route path="/crime" component={Crime} />
                  <Route path="/complaints" component={Complaints} />
                  <Route path="/missing-person" component={MissingPerson} />
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
