import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PartyContext from "./contexts/partyContext";
import ShoppingContext from "./contexts/shoppingContext";

import RegisterUser from "./components/register";
import TodoList from "./components/toDoList";

function App() {
  return (
    <ShoppingContext.Provider>
      <PartyContext.Provider>
        <div className="App">
          <Router>
            {/* <Route exact path="/login" component={login} /> */}
            <Route exact path="/register" component={RegisterUser} />
            <Route path="/todo" component = {TodoList}/>
          </Router>
        </div>
      </PartyContext.Provider>
    </ShoppingContext.Provider>
  );
}

export default App;
