import React from 'react'
import "../Styles/sidebar.css"
export const SideBar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="menu-item">Home</div>
        <div className="menu-item">Bookmark</div>
        <div className="menu-item">Explore</div>
        <div className="menu-item">Profile</div>
        <div className="user-profile">UserProfile</div>
      </div>
      {/* Rest of your component */}
    </div>
  )
}
