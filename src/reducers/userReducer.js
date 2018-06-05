var initialState = {
  users : []
}
const userReducer = (state = initialState, action ) => {
  let newState = {...state};
  switch (action.type) {
    case "ADD_USER":
      newState.users.push(action.payload);
      console.log(newState);
      break;
  };
  return newState;
};

export default userReducer;
