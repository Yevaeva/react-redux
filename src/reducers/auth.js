import { CHANGE_AUTH } from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};

export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default auth;
