import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ShoppingList from "./components/addShoppingList";
import RegisterUser from "./components/register";
import PrivateRoute from "./utils/privateRoute";

import Nav from "./components/nav";
import Login from "./components/login";
import AddParty from "./components/addParty";
import Dashboard from "./components/dashboard";
import PartyItem from "./components/partyItem";
import EditParty from "./components/editParty";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterUser} />
        <Route exact path="/">
          <Redirect to="/dashboard"></Redirect>
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/party/:id" component={PartyItem} />
        <PrivateRoute
          exact
          path="/shopping-list/:id"
          component={ShoppingList}
        />
        <PrivateRoute exact path="/add-party" component={AddParty} />
        <PrivateRoute exact path="/edit-party/:id" component={EditParty} />
      </Router>
    </div>
  );
}

export default App;
