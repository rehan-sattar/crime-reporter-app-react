import React from "react";
import { connect } from "react-redux";
import store from "../store";
import { fetchDataFromDbForAdmin } from "../actions/AdminActions"
import firebase from "firebase";
class Missing_person_status extends React.Component {
    constructor() {
        super();
        this.state = {
            missingPersonReports: undefined,
            error: ''
        }
        this.handleStatus = this.handleStatus.bind(this);
        this.getMissingPersonData = this.getMissingPersonData.bind(this);
    }

    getMissingPersonData(cityName) {

        if (this.props.reports[cityName]) {
            if (this.props.reports[cityName]["missing_person"]) {
                let array = [];
                let dataObject = this.props.reports[cityName]["missing_person"];
                for (let key in dataObject) {
                    dataObject[key].id = key;
                    array.push(dataObject[key])
                }
                console.log(array);
                this.setState({
                    missingPersonReports: array,
                    error: ''
                })

            } else {
                this.setState({
                    error: 'No crime reprots of this city.',
                    missingPersonReports: undefined
                });
            }
        } else {
            this.setState({
                error: 'This city has no reprots related to any crime.',
                missingPersonReports: undefined
            });
        }
    }

    handleStatus(item) {
        console.log("Id of City" + item.id);
        firebase.database().ref('reports').child(item.cityName).child(item.crimeType).child(item.id).set({ status: 1, ...item }).then(() => {
           alert('Status approved!')
        }).catch(error => {
            alert('error: ', error.message);
        })
    };
    render() {
        return (
            <div>
                <div className="container">
                    <select
                        className="form-control form-control-lg my-2"
                        onChange={(event) => this.getMissingPersonData(event.target.value)}
                    >
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

                {this.state.missingPersonReports === undefined ?
                    <h3 className="text-center my-5">Select City for crime reports </h3> : this.state.missingPersonReports.map((item, index) => (
                        (
                            <div className="row mt-3" key={index}>
                                <div className="card w-100">
                                    <div className="card-header bg-dark text-white text-center">
                                        <div className="card-title">
                                            <h3>Crime Report: {index + 1}</h3>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5>Name : {item.userName}</h5>
                                        <hr />
                                        <h5>City Name: {item.missingPersonName}</h5>
                                        <hr />
                                        <h5> Description:  </h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                    <div className="card-footer">
                                        Status:  <button className="btn btn-outline-success" onClick={ () => this.handleStatus(item)}>Approve</button> 
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                <h5 className="text-center text-white">{this.state.error}</h5>

            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    reports: state.admin
});

store.dispatch(fetchDataFromDbForAdmin());
export default connect(mapStateToProps)(Missing_person_status);