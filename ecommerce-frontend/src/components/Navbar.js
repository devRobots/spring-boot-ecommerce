import React, { useContext, useState } from "react";

import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import UserContext from "../config/context";

export default function Navbar() {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const pathname = window.location.pathname;

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    // Logged in
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item name={user.username} active as={Link} to="/" />

      <Menu.Menu position="right">
        <Menu.Item name="logout" />
      </Menu.Menu>
    </Menu>
  ) : (
    // Guest
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
    </Menu>
  );

  return menuBar;
}
