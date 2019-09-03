import React from 'react';

export default function ReportCard({ item, index }) {
  return (
    <div className='row mt-3'>
      <div className='card w-100'>
        <div className='card-header bg-dark text-white text-center'>
          <div className='card-title'>
            <h3>Report: {index + 1}</h3>
          </div>
        </div>
        <div className='card-body'>
          <table className='table text-center'>
            {item.userName && (
              <tr>
                <th> Name </th>
                <td>{item.userName}</td>
              </tr>
            )}
            {item.name && (
              <tr>
                <th> Name </th>
                <td>{item.name}</td>
              </tr>
            )}
            <tr>
              <th>City name</th>
              <td>{item.cityName}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{item.description}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{item.status ? 'Approved' : 'Pending'}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
