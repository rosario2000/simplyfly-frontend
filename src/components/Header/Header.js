// Header.js
import React from "react";
import "./Header.css";
import profilePic from "../images/profile.svg";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>SimplyFly</h1>
        <p>Fly high, Its your sky.</p>
      </div>

      <img src={profilePic} alt="Profile" className="profile-img" />
    </header>
  );
};

export default Header;
