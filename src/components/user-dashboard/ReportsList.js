import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllReports } from '../../store/actions/reports';

const ReportList = ({ getAllReports }) => {
  useEffect(() => {
    getAllReports();
  }, [getAllReports]);
  return <div>Report List</div>;
};
export default connect(
  undefined,
  { getAllReports }
)(ReportList);
