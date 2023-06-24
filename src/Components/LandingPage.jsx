import React, { useState } from "react";
import UserFeed from "./UserFeed";
import { useContext } from "react";
import { ForumContext } from "../Context/FormContext";
import Post from "./Post";
import { SideBar } from "./SideBar";

import "../Styles/landingpage.css"

export const LandingPage = () => {
  const { forumData } = useContext(ForumContext);
  const [sortOption, setSortOption] = useState("latest");
  const [showSort, setShowSort] = useState(false);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setShowSort(!showSort);
    console.log(sortOption);
  };

  const sortedPosts = [...forumData.posts];
  if (sortOption === "latest") {
    sortedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sortOption === "upvoted") {
    sortedPosts.sort((a, b) => b.upvotes - a.upvotes);
  }

  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="posts">
       <h1>Welcome to Forum App</h1>
        {console.log(sortedPosts)}
        {showSort &&
          sortedPosts.map((post) => <Post key={post.postId} post={post} />)}
      </div>
      <div className="sorting-options">
        <label htmlFor="sortOption">Sort By: </label>
        <select
          id="sortOption"
          value={sortOption}
          onChange={(e) => handleSortChange(e)}
        >
          <option value="latest">Latest</option>
          <option value="upvoted">Most Upvoted</option>
        </select>
      </div>
    </div>
  );
};
