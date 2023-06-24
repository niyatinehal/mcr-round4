import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ForumContext } from "./Context/FormContext";
import { SideBar } from "./Components/SideBar";
import "./Styles/landingpage.css";

export const IndividualPost = () => {
  const { postId } = useParams();
  const { forumData } = useContext(ForumContext);
  const post = forumData.posts.find((post) => post.postId === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="main">
    <h3 className="heading">MyForum</h3>
      <div className="container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="posts">
          <h2>{post.post}</h2>
          <p>{post.postDescription}</p>
          <p>Upvotes: {post.upvotes}</p>
          <p>Downvotes: {post.downvotes}</p>
          <p>Tags: {post.tags.join(", ")}</p>
          <p>Created At: {post.createdAt}</p>
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
        <div className="sorting-options"></div>
      </div>
    </div>
  );
};
