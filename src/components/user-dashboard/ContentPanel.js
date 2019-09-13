import React from 'react';
import { Route } from 'react-router-dom';
import ReportsList from './ReportsList';
import AddReport from './AddReport';
const ContentPanel = props => {
  const routes = [
    {
      path: '/dashboard/',
      exact: true,
      component: () => <ReportsList filterUserReports={false} />
    },
    { path: '/dashboard/add', exact: false, component: AddReport },
    {
      path: '/dashboard/user-reports',
      exact: false,
      component: () => <ReportsList filterUserReports={true} />
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
