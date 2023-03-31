import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, Search } from "semantic-ui-react";

const NavBar = ({ setSearch }) => {
  return (
    <Menu>
      <Menu.Item as={NavLink} to="" name="home"></Menu.Item>
      <Menu.Item
        as={NavLink}
        to="/emojis/all"
        name="view-all-emojis"
      ></Menu.Item>
      <Dropdown text="View by Categories" pointing className="link item">
        <Dropdown.Menu>
          <Dropdown.Item as={NavLink} to="/emojis/symbols">
            Symbols 💕
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/emojis/smileys-people">
            Smileys & People 😃
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/emojis/animals-nature">
            Animals & Nature 🐻
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/emojis/miscellaneous">
            Miscellaneous 🌐
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/emojis/food-drinks">
            Food & Drinks 🍔
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item as={NavLink} to="/emojis/new" name="add-new-emoji"></Menu.Item>
      <Search
        placeholder="Type here..."
        onSearchChange={(e) => setSearch(e.target.value)}
      />
    </Menu>
  );
};

export default NavBar;
