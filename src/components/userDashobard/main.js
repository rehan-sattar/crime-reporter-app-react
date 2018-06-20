import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import AddComplaints from "./addComplaints";
import AddCrime from "./addCrime";
import AddMissingPerson from "./addMissingReport"
class AllReports extends React.Component {
    render() {
        return(          
            <div>
              <Router>
                  <div>
                    <div className="container mt-5">
                      <h1 className="text-white text-center">Welcome</h1>
                       <hr />
                      <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12">
                          <Link className="btn btn-block btn-links bg-dark btn-lg" to="/user-dashboard/add-crime/">Crime Report</Link>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12">
                          <Link className="btn btn-block btn-links bg-dark btn-lg" to="/user-dashboard/add-complaints"> Complaints Reports</Link>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12">
                          <Link className="btn btn-block btn-dark btn-links btn-lg" to="/user-dashboard/add-missin-person"> Missing Person</Link>
                        </div>
                      </div>
           
                  <div className="row mt-5">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <Route path="/user-dashboard/" exact component={AddCrime}/>
                    <Route path="/user-dashboard/add-crime" component={AddCrime}/>
                    <Route path="/user-dashboard/add-complaints" component={AddComplaints}/>
                    <Route path="/user-dashboard/add-missin-person" component={AddMissingPerson} />
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
