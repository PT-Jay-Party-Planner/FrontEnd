import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { PartyContext } from "./contexts/partyContext";
import { ShoppingContext } from "./contexts/shoppingContext";
import ShoppingList from "./components/addShoppingList";
import RegisterUser from "./components/register";
import PrivateRoute from "./utils/privateRoute";

import Nav from "./components/nav";
import axiosWithAuth from "./utils/axiosWithAuth";
import Login from "./components/login";

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [partyBudget, setPartyBudget] = useState();
  const [partyList, setPartyList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/parties")
      .then(res => {
        setShoppingList(res.data);
        setPartyList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(shoppingList);

  return (
    <ShoppingContext.Provider
      value={{ shoppingList, setShoppingList, partyBudget, setPartyBudget }}
    >
      <PartyContext.Provider value={{ partyList, setPartyList }}>
        <div className="App">
          <Router>
            <Nav />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={RegisterUser} />
            <Route exact path="/">
              <Redirect to="/dashboard"></Redirect>
            </Route>
            {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
            {/* <PrivateRoute exact path="/party" component={AddParty} /> */}
            <PrivateRoute
              exact
              path="/shopping-list"
              component={ShoppingList}
            />
          </Router>
        </div>
      </PartyContext.Provider>
    </ShoppingContext.Provider>
  );
}

export default App;
