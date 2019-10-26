import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import RegisterUser from "./components/register";
import PrivateRoute from "./utils/privateRoute";
import Nav from "./components/nav";
import Login from "./components/login";
import AddParty from "./components/addParty";
import Dashboard from "./components/dashboard";
import PartyItem from "./components/partyItem";
import ShoppingEdit from "./components/addShoppingList";
import ShoppingItem from "./components/shoppingItem";
import EditParty from "./components/editParty";
import ToDoPage from "./components/toDoPage";

import * as AppStyle from "./design/app-design";

function App() {
  return (
    <div className="App">
      <AppStyle.Header>
        <AppStyle.TitleText href="/dashboard">Party Planner</AppStyle.TitleText>
      </AppStyle.Header>
      <AppStyle.AppContainer>
        <Router>
          {/* <Nav /> */}
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
            component={ShoppingItem}
          />
          <PrivateRoute
            exact
            path="/edit-shopping-list/:id"
            component={ShoppingEdit}
          />
          <PrivateRoute exact path="/add-party" component={AddParty} />
          <PrivateRoute exact path="/edit-party/:id" component={EditParty} />
          <PrivateRoute exact path="/to-do-list" component={ToDoPage} />
        </Router>
      </AppStyle.AppContainer>
    </div>
  );
}

export default App;
