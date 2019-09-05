import React from "react";

const CountryDropDown = ({ name, value, onChange }) => {
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose"
  ];
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="form-control my-2"
    >
      {cities.map(c => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default CountryDropDown;
