import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveComment } from "../actions";

const CommentBox = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveComment(value));
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={value} onChange={handleChange} />
      <div>
        <button>Submit comment</button>
      </div>
    </form>
  );
};

export default CommentBox;
