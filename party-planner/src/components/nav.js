import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as NavS from "../design/nav-style";

const Nav = () => {
  return (
    <NavS.NavContainer>
      <NavLink className="nav-link" to="/dashboard">
        Dash
      </NavLink>
      <NavLink className="nav-link" to="/add-party">
        Add A Party
      </NavLink>
      <NavLink className="nav-link" to="/to-do-list">
        To Do List
      </NavLink>
      <NavLink className="login-link" to="/login">
        Login
      </NavLink>
    </NavS.NavContainer>
  );
};

export default Nav;
