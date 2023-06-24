import React, { useState } from "react";
import UserFeed from "./UserFeed";
import { useContext } from "react";
import { ForumContext } from "../Context/FormContext";
import Post from "./Post";
import { SideBar } from "./SideBar";

import "../Styles/landingpage.css";

export const LandingPage = () => {
  const { forumData } = useContext(ForumContext);
  const [sortOption, setSortOption] = useState("latest");
  const [showSort, setShowSort] = useState(false);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setShowSort(true);
  };

  const sortedPosts = [...forumData.posts];
  if (sortOption === "latest") {
    sortedPosts.sort((a, b) => b.upvotes - a.upvotes);
  } else if (sortOption === "upvoted") {
    sortedPosts.sort((a, b) => b.upvotes - a.upvotes);
  }

  return (
    <div className="main">
      <h3 className="heading">MyForum</h3>
      <div className="container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="posts">
          <h3>Latest Post</h3>
          <div className="post-card">
            {console.log(sortedPosts)}
            {showSort ?(
              <div className="post-card-content">
                {sortedPosts.map((post) => (<Post key={post.postId} post={post} />
                ))}
              </div>
            ) : <UserFeed/>}
          </div>
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
    </div>
  );
};
