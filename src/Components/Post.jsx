import React, { useState } from 'react'
import { useContext } from 'react';

import Comment from './Comment';
import { ForumContext } from '../Context/FormContext';
import { useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
  const { dispatch } = useContext(ForumContext);
  const[show,setShow]=useState(false);
  const nav=useNavigate();

  const handleUpvote = () => {
    dispatch({ type: 'UPVOTE_POST', postId: post.postId });
  };

  const handleDownvote = () => {
    dispatch({ type: 'DOWNVOTE_POST', postId: post.postId });
  };

  const handleBookmark = () => {
    dispatch({ type: 'TOGGLE_BOOKMARK', postId: post.postId });
    nav(`/bookmark/${post.postId}`)
  };

  const handleComment = () => {
    setShow(!show);
    dispatch({ type: 'SHOW_COMMENTS', postId: post.postId });
  };
  console.log(post.upvotes-post.downvotes)

  return (
    <div>
      <h3>{post.post}</h3>
      <p>{post.postDescription}</p>
      <button onClick={handleUpvote}>Upvote</button>
      {" "}{post.upvotes-post.downvotes}{" "}
      <button onClick={handleDownvote}>Downvote</button>
      <button onClick={handleBookmark}>
        {post.isBookmarked ? 'Bookmarked' : 'Bookmark'}
      </button>
      <button onClick={()=>{handleComment();setShow(!show)}}>Comment</button>
      {show && post.comments.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
      {/* {post.comments.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))} */}
    </div>
  );
};

export default Post;
