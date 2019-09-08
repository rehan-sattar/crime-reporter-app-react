import React from 'react';
import { Link } from 'react-router-dom';

const SidePanel = () => {
  return (
    <>
      <Link to='/dashboard/'>My Reports</Link>
      <br />
      <Link to='/dashboard/add'>Add New</Link>
    </>
  );
};

export default SidePanel;
