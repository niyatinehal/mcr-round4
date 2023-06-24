import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ForumContext } from "./Context/FormContext";
import { SideBar } from "./Components/SideBar";
import "./Styles/individualPage.css";

export const IndividualPost = () => {
  const { postId } = useParams();
  const { forumData, dispatch } = useContext(ForumContext);
   const nav = useNavigate();
    const [show, setShow] = useState(false);
  const post = forumData.posts.find((post) => post.postId === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  const handleDownvote = () => {
    dispatch({ type: "DOWNVOTE_POST", postId: post.postId });
  };
  const handleUpvote = () => {
    dispatch({ type: "UPVOTE_POST", postId: post.postId });
  };
  const handleComment = () => {
    setShow(!show);
    dispatch({ type: "SHOW_COMMENTS", postId: post.postId });
    nav(`/bookmark/${post.postId}`);
  };
  const handleBookmark = () => {
    dispatch({ type: "TOGGLE_BOOKMARK", postId: post.postId });
    
  };

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="individual-posts">
        <div className="individual-post-card">
          <div className="individual-votes">
            <button className="vote-button" onClick={handleUpvote}>
              <i class="fa-solid fa-caret-up fa-2xl"></i>
            </button>
            <span className="vote-count">{post.upvotes - post.downvotes}</span>
            <button className="vote-button" onClick={handleDownvote}>
              <i class="fa-solid fa-caret-down fa-2xl"></i>
            </button>
          </div>

          <div className="post-container">
            <p>
              Posted by <strong>{post.username}</strong>
             {" "} {new Date(post.createdAt).getMinutes()} mins
            </p>
            <h2>{post.post}</h2>
            <div className="tags">
              <p>Tags: {post.tags.join(", ")}</p>
            </div>
            <p>
              {post.postDescription}
              <hr />
            </p>
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
        </div>

        <div className="comment-container">
          
          <h3>Comments</h3>
          {post.comments.length === 0 ? (
            <p>No comments yet</p>
          ) : (
            post.comments.map((comment) => (
              <div key={comment.commentId}>
                <p>{comment.comment}</p>
                <p>By: {comment.username}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="sorting-options"></div>
    </div>
  );
};
