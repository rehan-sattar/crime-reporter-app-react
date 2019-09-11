import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = ({ type = 'ThreeDots', height, width, color = '#00000' }) => (
  <Loader type={type} color={color} height={height || 20} width={width || 30} />
);

export default Spinner;
