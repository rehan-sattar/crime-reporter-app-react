import React from 'react';
import SidePanel from './SidePanel';
import ContentPanel from './ContentPanel';

const Dashboard = props => {
  console.log('Props from Dashboard: ', props);
  return (
    <>
      <div className='container mt-5'>
        <h2>Welcome, username</h2>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-lg-3'>
            <SidePanel />
          </div>
          <div className='col-md-9 col-sm-12 col-lg-9'>
            <ContentPanel {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
