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
        {/* <PrivateRoute exact path="/add-party" component={AddParty} /> */}
        <PrivateRoute
          exact
          path="/shopping-list/:id"
          component={ShoppingList}
        />
      </Router>
    </div>
  );
}

export default App;
