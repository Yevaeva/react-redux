import axios from "axios";
import { AUTH_USER, CHANGE_AUTH, SAVE_COMMENT } from "./types";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const changeAuth = (isAuth) => {
  return {
    type: CHANGE_AUTH,
    payload: isAuth,
  };
};

export const signup = (formProps) => (dispatch) => {
  axios.post("http://localhost:3007/signup", formProps);
  // dispatch({ type: AUTH_USER });
};
