import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../contexts/shoppingContext";

const Nav = () => {
  const { partyBudget, setPartyBudget } = useContext(ShoppingContext);
  const [editing, setEditing] = useState(false);

  setPartyBudget(0);

  const budgetChange = e => {
    e.preventDefault();
    setPartyBudget(partyBudget);
  };

  console.log(partyBudget);

  return (
    <nav class="nav-container">
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