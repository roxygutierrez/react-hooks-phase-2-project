import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu>
      <Menu.Item as={NavLink} to="" name="home"></Menu.Item>
      <Menu.Item
        as={NavLink}
        to="/emojis/all"
        name="view-all-emojis"
      ></Menu.Item>
      <Menu.Item as={NavLink} to="/emojis/new" name="add-new-emoji"></Menu.Item>
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
