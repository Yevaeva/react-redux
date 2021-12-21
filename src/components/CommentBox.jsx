import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { saveComment } from "../actions";

const CommentBox = () => {
  const [value, setValue] = useState("");
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      console.log("you must logged in");
      navigate("/");
    }
  }, [auth, navigate]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveComment(value));
    setValue("");
  };
  return (
    <div>
      <h1>Comment Box</h1>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={value} onChange={handleChange} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
    </div>
  );
};

export default CommentBox;
