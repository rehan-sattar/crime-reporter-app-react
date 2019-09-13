import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getReports } from '../../store/actions/reports';
import Spinner from '../common/Spinner';
import Report from './Report';

const ReportList = ({ getReports, reports, fetching, filterUserReports }) => {
  useEffect(() => {
    getReports(filterUserReports);
  }, [getReports, filterUserReports]);

  const renderLoader = () => (
    <div className='spinner-container'>
      <Spinner type='Circles' color='#1565c0' height={100} width={100} />
    </div>
  );
  const renderReports = reports =>
    reports.length > 0 ? (
      reports.map(r => <Report key={r.id} report={r} />)
    ) : (
      <p>No Reports.</p>
    );
  return (
    <div className='reports-container'>
      {fetching ? renderLoader() : renderReports(reports)}
    </div>
  );
};

const mapStateToProps = ({ reports }) => ({
  reports: reports.data,
  fetching: reports.fetching
});
export default connect(
  mapStateToProps,
  { getReports }
)(ReportList);
