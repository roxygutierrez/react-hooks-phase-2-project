import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header-title">
      <div>
        Emoji World
        <img
          className="logo"
          src="https://images.vexels.com/media/users/3/205998/isolated/preview/e3a900a218f2abfd8ab7df00870127ce-cute-earth-globe-cartoon.png"
        ></img>
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
