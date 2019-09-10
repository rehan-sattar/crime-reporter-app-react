import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const SidePanel = () => {
  return (
    <>
      <Link to='/dashboard/' className='link-styles'>
        <button className='btn btn-block btn-primary'>
          <i class='fas fa-file-import mx-2'></i> All Reports
        </button>
      </Link>
      <br />
      <Link to='/dashboard/add' className='link-styles'>
        <button className='btn btn-block btn-primary'>
          <i class='fas fa-file-medical mx-2'></i>
          Add Reports
        </button>
      </Link>
      <br />
      <Link to='/dashboard/user-reports' className='link-styles'>
        <button className='btn btn-block btn-primary'>
          <i class='fas fa-file-download mx-2'></i>
          My Reports
        </button>
      </Link>
    </>
  );
};

export default SidePanel;
