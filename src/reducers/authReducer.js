export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('User Logged in| Token: ', action.uid);
      return {
        uid: action.uid
      };
    case 'LOGIN_WITH_EMAIL_PASS':
      return {
        uid: action.payload
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
