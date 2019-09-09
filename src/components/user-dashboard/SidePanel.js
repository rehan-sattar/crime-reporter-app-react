import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const SidePanel = () => {
  return (
    <>
      <Link to='/dashboard/' className='link-styles'>
        <button className='btn btn-block btn-primary'>
          <i className='fa fa-users mx-2'></i>
          My Reports
        </button>
      </Link>
      <br />
      <Link to='/dashboard/add' className='link-styles'>
        <button className='btn btn-block btn-primary'>
          <i className='fa fa-plus mx-2'></i>
          Add New
        </button>
      </Link>
    </>
  );
};

export default SidePanel;
