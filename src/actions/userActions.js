export function handleUserRegistration(user) {
  return {
    type: "ADD_USER",
    payload: user
  };
};
