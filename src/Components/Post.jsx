import React, { useState } from "react";
import { useContext } from "react";

import Comment from "./Comment";
import { ForumContext } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";

import "../Styles/posts.css";

const Post = ({ post }) => {
  const { dispatch } = useContext(ForumContext);
  const [show, setShow] = useState(false);
  const nav = useNavigate();

  const handleUpvote = () => {
    dispatch({ type: "UPVOTE_POST", postId: post.postId });
  };

  const handleDownvote = () => {
    dispatch({ type: "DOWNVOTE_POST", postId: post.postId });
  };

  const handleBookmark = () => {
    dispatch({ type: "TOGGLE_BOOKMARK", postId: post.postId });
    
  };

  const handleComment = () => {
    setShow(!show);
    dispatch({ type: "SHOW_COMMENTS", postId: post.postId });
    nav(`/bookmark/${post.postId}`);
  };
  console.log(post);

  return (
    <div className="post-card">
      <div className="post-content">
        {" "}
        <div className="vote-btns">
          <button className="vote-button" onClick={handleUpvote}>
            <i class="fa-solid fa-caret-up fa-2xl"></i>
          </button>
          <span className="vote-count">{post.upvotes - post.downvotes}</span>
          <button className="vote-button" onClick={handleDownvote}>
            <i class="fa-solid fa-caret-down fa-2xl"></i>
          </button>
        </div>
        <div className="vote-section">
          <h3>{post.post}</h3>
          <p>{post.postDescription} <hr/></p>
          <div className="function-btns">
            <button
              className="comment-button"
              onClick={() => {
                handleComment();
                setShow(!show);
              }}
            >
              <i class="fa-solid fa-message"></i>
            </button>

            <button className="comment-button">
              <i class="fa-solid fa-share-nodes"></i>
            </button>

            <button className="bookmark-button" onClick={handleBookmark}>
              {post.isBookmarked ? (
                <i class="fa-solid fa-bookmark"></i>
              ) : (
                <i class="fa-regular fa-bookmark"></i>
              )}
            </button>
          </div>
        </div>
        <hr/>
        {show && (
          <div className="comments-section">
            {post.comments.map((comment) => (
              <Comment key={comment.commentId} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
