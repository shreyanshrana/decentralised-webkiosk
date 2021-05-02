import React from 'react';
import { Button, Menu } from "semantic-ui-react";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Menu color="red" pointing secondary>
      <Menu.Item header>TIET, Patiala - Admin</Menu.Item>
        <Link to="/">
          <Menu.Item >
          Creat New User
        </Menu.Item>
        </Link>
        <Link to="/list">
         <Menu.Item
        >
          List Users
        </Menu.Item>
        </Link>
        <Link to="/delete">
          <Menu.Item >
          Delete User
        </Menu.Item>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
