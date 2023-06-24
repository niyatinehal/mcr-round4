import React from 'react'
import "../Styles/sidebar.css"
export const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="menu-item">{<i class="fa-solid fa-house home"></i>}{" "} Home</div>
        <div className="menu-item">{<i class="fa-solid fa-bookmark bookmark"></i>}{" "}Bookmark</div>
        <div className="menu-item">{<i class="fa-regular fa-compass explore"></i>}{" "}Explore</div>
        <div className="menu-item">{<i class="fa-solid fa-user profile"></i>}{" "}Profile</div>
        <div className="user-profile">{<i class="fa-duotone fa-circle user"></i>}{" "}UserProfile</div>
      </div>
      {/* Rest of your component */}
    </div>
  )
}
