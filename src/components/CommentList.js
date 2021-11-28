import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CommentList = () => {
  const { comments } = useSelector((state) => state);
  useEffect(() => {
    console.log(comments);
  }, [comments]);
  const renderComments = () => {
    return comments.map((comment, index) => {
      return <li key={index}>{comment}</li>;
    });
  };
  return <ul>{renderComments()}</ul>;
};

export default CommentList;
