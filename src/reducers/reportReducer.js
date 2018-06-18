var initialState = {
  crimeReports : [],
  complaints: [],
  missingPerson: []
};

const reportReducer = (state = initialState, action ) => {
  let newState = {...state};
  switch (action.type) {
    // crime Case
    case "CRIME_REPORT":
      newState.crimeReports.push(action.payload);
      break;

    // complaints case
    case "COMPLAINT_REPORT":
      newState.complaints.push(action.payload);
      break;
    // missing person case
    case "MISSING_PERSON":
      newState.missingPerson.push(action.payload);
      break;
    case "SET_REPORT":
      console.log('SET_REPORT LOG: ', action.payload)
      return action.payload
  };
  return newState;
};

export default reportReducer;
