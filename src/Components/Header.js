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
          src="https://npr.brightspotcdn.com/dims4/default/bb65432/2147483647/strip/true/crop/640x640+0+0/resize/880x880!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwamc%2Ffiles%2F201907%2FThinking_Face_Emoji.png"
        />
        World
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
