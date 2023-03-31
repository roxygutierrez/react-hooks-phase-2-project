import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="header-title">
        Emoji
        <img
          className="app-logo"
          alt="thinker"
          src="https://em-content.zobj.net/thumbs/160/apple/354/exploding-head_1f92f.png"
        />
        World
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
