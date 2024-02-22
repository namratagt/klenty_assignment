export const updateUser = (userData) => {
  return {
    type: "UPDATE_USER",
    payload: userData,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const login = (isAuth) => {
  return {
    type: "LOGIN",
    payload: isAuth,
  };
};

export const updateUserId = (user_id) => {
  return {
    type: "UPDATE_USER_ID",
    payload: user_id,
  };
};
