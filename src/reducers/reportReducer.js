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
      console.log(newState);
      break;

    // complaints case
    case "COMPLAINT_REPORT":
      newState.complaints.push(action.payload);
      console.log(newState);
      break;

    // missing person case
    case "MISSING_PERSON":
      newState.missingPerson.push(action.payload);
      console.log(newState);
      break;
  };
  return newState;
};

export default reportReducer;
