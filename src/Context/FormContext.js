// ForumContext.js
import React, { createContext, useReducer } from "react";

import { forumData } from "../Data";

export const ForumContext = createContext();

const initialState = {
  forumData: forumData,
};

const forumReducer = (state, action) => {
  switch (action.type) {
    case "UPVOTE_POST":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === action.postId
              ? { ...post, upvotes: post.upvotes + 1 }
              : post
          ),
        },
      };
    case "DOWNVOTE_POST":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === action.postId
              ? { ...post, upvotes: post.upvotes - 1 }
              : post
          ),
        },
      };
    case "TOGGLE_BOOKMARK":
      return {
        ...state,
        forumData: {
          ...state.forumData,
          posts: state.forumData.posts.map((post) =>
            post.postId === action.postId
              ? { ...post, isBookmarked: !post.isBookmarked }
              : post
          ),
        },
      };
    case "SHOW_COMMENTS":
      return state; // Placeholder case for showing comments
    default:
      return state;
  }
};

export const ForumProvider = ({ children }) => {
  const [state, dispatch] = useReducer(forumReducer, initialState);

  return (
    <ForumContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ForumContext.Provider>
  );
};
