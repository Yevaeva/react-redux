import { SAVE_COMMENT } from "../../actions/types";
import commentReducer from "../comments";

it("handle acction of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment",
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual(["New comment"]);
});
