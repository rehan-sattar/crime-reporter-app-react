import React from "react";
import { connect } from "react-redux";
import store from "../store";
import { fetchDataFromDbForAdmin } from "../actions/AdminActions";

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            total_Reports: undefined,
            total_crim: undefined,
            total_missing_person: undefined,
            total_complaint: undefined
        };
    };
    render() {
        return (
            <div className="mb-5">
                <h1 className="text-white text-center py-3">Welcome To Stats </h1>
                <table className="table table-dark text-white">
                    <tbody>
                        <tr>
                            <th>Total Cities (involved in crimes)</th>
                            <td>{this.props.reports.totalCities === 0 ? <p> Loading... </p> : <span>{this.props.reports.totalCities}</span>}</td>
                        </tr>
                        <tr>
                            <th>Total Crime Reports</th>
                            <td>{this.props.reports.crimeTotal === 0 ? <p> Loading... </p> : this.props.reports.crimeTotal}</td>
                        </tr>


                        <tr>
                            <th>Total Complaitns </th>
                            <td>{this.props.reports.complaint_total === 0 ? <p> Loading... </p> : this.props.reports.complaint_total}</td>
                        </tr>


                        <tr>
                            <th>Total Missing Person Reports</th>
                            <td>{this.props.reports.missing_person_total === 0 ? <p> Loading... </p> : this.props.reports.missing_person_total}</td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <th>Total Reports</th>
                            <td>{this.props.reports.totalReports === 0 ? <p> Loading... </p> : this.props.reports.totalReports}</td>

                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    };
};

const structureData = object => {
    let allreports = [];
    let arrayOfCities = [];
    for (let key in object) {
        arrayOfCities.push(key);
    }
    for (let key in object) {
        for (let key2 in object[key]) {
            for (let key3 in object[key][key2]) {
                allreports.push(object[key][key2][key3]);
            };
        };
    };
    let totalCities = arrayOfCities.length;
    let totalReports = allreports.length;


    let crimeTotal = allreports.filter(singleReport => singleReport.crimeType === "crimes");
    let complaint_total = allreports.filter(singleReport => singleReport.crimeType === "complaints");
    let missing_person_total = allreports.filter(singleReport => singleReport.crimeType === "missing_person");


    let returnableObject = {
        crimeTotal: crimeTotal.length,
        complaint_total: complaint_total.length,
        missing_person_total: missing_person_total.length,
        totalReports,
        totalCities
    }

    return returnableObject
}
const mapStateToProps = (state) => ({
    reports: structureData(state.admin)
});

store.dispatch(fetchDataFromDbForAdmin());
export default connect(mapStateToProps)(Stats);

