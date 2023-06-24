import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <p>{comment.comment}</p>
      <p>{comment.username}</p>
    </div>
  );
};

export default Comment;
