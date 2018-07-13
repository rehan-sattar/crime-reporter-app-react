export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('User Logged in| Token: ', action.uid);
      return {
        uid: action.uid
      }
      break;
    case 'LOGIN_WITH_EMAIL_PASS':
      return {
        uid: action.payload
      }
      break;
    case 'LOGOUT':
      return {};
      break;
    default:
      return state;
  };
};


