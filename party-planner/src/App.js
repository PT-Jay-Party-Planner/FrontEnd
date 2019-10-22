import React ,{useState} from "react";
import "./App.css";

import {PartyContext} from "./contexts/partyContext";
import {ShoppingContext} from "./contexts/shoppingContext";
import data from '../src/data'
import AddShoppingList from "./components/addShoppingList";
import AddParty from  './components/addParty';
//  import ShoppingForm from './components/shoppingForm';
import {BrowserRouter as Router, Route} from "react-router-dom";


 
 

   
  function App() {

    const ShoppingList =[]
     const [items] =useState(ShoppingList)

    return (
      <ShoppingContext.Provider value={items}>
        <PartyContext.Provider>
          <div className="App">
            <header className="App-header"></header>
          </div>
          <Route exact path ="/" component ={AddParty}/>
          <Route exact path ="/shopping" component={AddShoppingList}/>
        </PartyContext.Provider>
      </ShoppingContext.Provider>
    );
  }
  
  export default App;