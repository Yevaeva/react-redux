import React, { useState } from "react";

const CommentBox = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
