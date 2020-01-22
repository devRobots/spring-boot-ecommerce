import React, { useContext, useState } from "react";

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Context from "../config/context";

export default function Navbar() {
  const context = useContext(Context);
  const { user } = context;

  const path = "home";
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const userInfo = user ? (
    <Menu.Menu position="right">
      <Menu.Item
        name="logout"
        active={activeItem === "logout"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
    </Menu.Menu>
  ) : (
    <Menu.Menu position="right">
      <Menu.Item
        name="login"
        active={activeItem === "login"}
        onClick={handleItemClick}
        as={Link}
        to="/login"
      />
      <Menu.Item
        name="sign in"
        active={activeItem === "sign in"}
        onClick={handleItemClick}
        userState
        as={Link}
        to="/signin"
      />
    </Menu.Menu>
  );
  const menuBar = (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="categories"
        active={activeItem === "categories"}
        onClick={handleItemClick}
        as={Link}
        to="/categories"
      />
      <Menu.Item
        name="products"
        active={activeItem === "products"}
        onClick={handleItemClick}
        as={Link}
        to="/products"
      />
      {userInfo}
    </Menu>
  );
  return menuBar;
}
