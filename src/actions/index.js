import axios from "axios";
import { AUTH_ERROR, AUTH_USER, CHANGE_AUTH, SAVE_COMMENT } from "./types";

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

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/signup",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email is in use" });
  }
};

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/signin",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid User" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: "",
  };
};
