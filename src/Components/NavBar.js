import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const NavBar = () => {
  return (
    <Menu>
      <Menu.Item as={NavLink} to="" name="home"></Menu.Item>
      <Menu.Item as={NavLink} to="/emojis/all" name="emojis"></Menu.Item>
      <Menu.Item as={NavLink} to="/emojis/new" name="new-emoji"></Menu.Item>
      <Dropdown text="Categories" pointing className="link item">
        <Dropdown.Menu>
          <Dropdown.Item as={NavLink} to="/emojis/hearts">
            Hearts
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/emojis/people">
            People
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/emojis/miscellaneous">
            Miscellaneous
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/emojis/smiley">
            Smiley
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/emojis/food">
            Food
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default NavBar;
