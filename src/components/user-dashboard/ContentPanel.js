import React from 'react';
import { Route } from 'react-router-dom';
import ReportsList from './ReportsList';
import AddReport from './AddReport';
import UserReports from './UserReports';

const ContentPanel = props => {
  const routes = [
    { path: '/dashboard/', exact: true, component: ReportsList },
    { path: '/dashboard/add', exact: false, component: AddReport },
    {
      path: '/dashboard/user-reports',
      exact: false,
      component: UserReports
    }
  ];
  return (
    <>
      {routes.map((ro, idx) => (
        <Route
          key={idx}
          path={ro.path}
          component={ro.component}
          exact={ro.exact}
        />
      ))}
    </>
  );
};

export default ContentPanel;
