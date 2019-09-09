import React from 'react';
import CountryDropDown from '../common/CountryDropDown';
import useForm from '../../hooks/useForm';

const AddReport = () => {
  const addReport = () => {
    console.log('addReport called!');
  };
  const { values, handleChange, handleSubmit } = useForm(addReport, {
    cityName: 'New York',
    reportType: 'crimeReport'
  });

  return (
    <>
      <h3>Add Report</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          className='form-control mb-2'
          value={values.title}
          onChange={handleChange}
          required
        />
        <select
          className='form-control'
          name='reportType'
          value={values.reportType}
          onChange={handleChange}>
          {[
            { type: 'Crime Report', value: 'crime' },
            { type: 'Missing Person Report', value: 'missingPerson' },
            { type: 'Complaints', value: 'complaints' }
          ].map((rt, idx) => (
            <option key={idx} value={rt.value}>
              {rt.type}
            </option>
          ))}
        </select>
        <CountryDropDown />
        <textarea
          className='form-control'
          name='description'
          placeholder='Description'
          rows='5'
          required
          value={values.description}
          onChange={handleChange}></textarea>
        <button
          className='btn bg-primary text-white mt-3 float-right'
          type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default AddReport;
