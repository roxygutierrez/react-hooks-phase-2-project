import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="header-title">
        Emoji World
        <img
          className="logo"
          src="https://o.remove.bg/downloads/56ef7bd7-0d51-4dfc-8bb4-c314ac7746fd/comhiclipartivlyi-removebg-preview.png"
        ></img>
      </div>
      <br />
      <br />
      <NavBar />
    </header>
  );
};

export default Header;
