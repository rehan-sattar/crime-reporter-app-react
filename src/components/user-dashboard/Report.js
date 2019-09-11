import React from 'react';

const Report = ({ report }) => (
  <div className='col report' key={report.id}>
    <h3>{report.title}</h3>
    <p>{report.cityName}</p>
    <p>{report.createdAt.toISOString()}</p>
    <p>{report.description}</p>
  </div>
);

export default Report;
