import React from "react";
import "./App.css";

import PartyContext from "./contexts/partyContext";
import ShoppingContext from "./contexts/shoppingContext";

function App() {
  return (
    <ShoppingContext.Provider>
      <PartyContext.Provider>
        <div className="App">
          <header className="App-header"></header>
        </div>
      </PartyContext.Provider>
    </ShoppingContext.Provider>
  );
}

export default App;
