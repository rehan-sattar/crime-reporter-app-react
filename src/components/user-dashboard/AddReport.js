import React from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { connect } from 'react-redux';
import { addReport } from '../../store/actions/reports';
import Spinner from '../common/Spinner';
import CountryDropDown from '../common/CountryDropDown';
import useForm from '../../hooks/useForm';

const AddReport = ({ addReport, loading, errMessage }) => {
  const { addToast } = useToasts();
  const _addReport = () => addReport(values, showAlert);
  const { values, handleChange, handleSubmit } = useForm(_addReport, {
    cityName: 'New York',
    reportType: 'crimeReport',
    title: '',
    description: ''
  });
  const { title, reportType, cityName, description } = values;
  const showAlert = type => {
    if (type === 'error') {
      addToast('Some Error Occurred', {
        appearance: 'error',
        autoDismiss: true
      });
    } else {
      addToast('Reported Successfully', {
        appearance: 'success',
        autoDismiss: true
      });
    }
  };
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
          value={title}
          onChange={handleChange}
          required
        />
        <select
          className='form-control'
          name='reportType'
          value={reportType}
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
        <CountryDropDown
          name='cityName'
          value={cityName}
          onChange={handleChange}
        />
        <textarea
          className='form-control'
          name='description'
          placeholder='Description'
          rows='5'
          required
          value={description}
          onChange={handleChange}></textarea>
        <button
          className='btn bg-primary text-white mt-3 submit-btn'
          type='submit'>
          {loading ? <Spinner heigh={10} width={30} color='#fff' /> : 'Submit'}
        </button>
        {errMessage && <p className='text-center text-danger'>{errMessage}</p>}
      </form>
    </>
  );
};

const mapStateToProps = ({ reports }) => {
  return {
    loading: reports.loading,
    errMessage: reports.errMessage
  };
};

export default connect(
  mapStateToProps,
  { addReport }
)(AddReport);
