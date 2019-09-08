import React from 'react';
import { Route } from 'react-router-dom';
import ReportsList from './ReportsList';
import AddReport from './AddReport';

const ContentPanel = props => {
  console.log(props);
  return (
    <>
      {[
        { path: '/dashboard/', exact: true, component: ReportsList },
        { path: '/dashboard/add', exact: false, component: AddReport }
      ].map(ro => (
        <Route path={ro.path} component={ro.component} exact={ro.exact} />
      ))}
    </>
  );
};

export default ContentPanel;
