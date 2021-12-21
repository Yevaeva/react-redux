import { AUTH_ERROR, AUTH_USER, CHANGE_AUTH } from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};

export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload,
        errorMessage: "",
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
