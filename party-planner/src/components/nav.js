import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container">
      <NavLink className="nav-link" to="/dashboard">
        <img src="LOGO"></img>
      </NavLink>
      <NavLink className="nav-link" to="/add-party">
        Add A Party
      </NavLink>
      <NavLink className="nav-link" to="/to-do-list">
        To Do List
      </NavLink>
      <NavLink className="nav-link" to="/shopping-list">
        Shopping List
      </NavLink>
      <NavLink className="login-link" to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default Nav;
