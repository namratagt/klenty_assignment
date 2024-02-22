const initialState = {
  isAuth: false,

  user_id: null,
  userData: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        userData: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        sessionId: null,
        userData: null,
      };
    case "LOGIN":
      return {
        ...state,
        isAuth: action.payload,
      };
    case "UPDATE_USER_ID":
      return {
        ...state,
        user_id: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
