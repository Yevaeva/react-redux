import { CHANGE_AUTH, SAVE_COMMENT } from "./types";

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
