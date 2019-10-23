import React ,{useState} from "react";
import "./App.css";
import { createContext } from 'react';

import {PartyContext} from "./contexts/partyContext";
import {ShoppingContext} from "./contexts/shoppingContext";
 import data from '../src/data'
import AddShoppingList from "./components/addShoppingList";
import AddParty from  './components/addParty';
 import {BrowserRouter as Router, Route} from "react-router-dom";


 
 

   
  function App() {

    const shoppingList = [];

      const [items] =useState(data);

      const [list, setList] = useState([]);

      
      console.log("ITEMS FROM APP",items)

      console.log("DATA",data)

 
 

   

  const [party, setParty] = useState([])

 
     const [editing, setEditing] = useState(false)
      
    return (
      <ShoppingContext.Provider value= {{items}}>
        <PartyContext.Provider value ={{party, setParty}} >
          <div className="App">
            <header className="App-header"></header>
          </div>
          <Route exact path ="/" component ={AddParty}/>
          <Route exact path ="/shopping" component={AddShoppingList}/>
        </PartyContext.Provider  >
      </ShoppingContext.Provider>



      //   <div className = "App"> 



      // <PartyContext.Provider value ={party,setParty}>
      //     <Route exact path ="/" component ={AddParty}/>

      // </PartyContext.Provider>

      // <ShoppingContext.Provider value = {{items, addItem}}>
      // <Route  path ="/shopping" 
      // component ={AddShoppingList}/>


 

      // </ShoppingContext.Provider>
      // </div>
    );
  }
  
  export default App;