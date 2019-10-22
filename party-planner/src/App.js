import React ,{useState} from "react";
import "./App.css";

import {PartyContext} from "./contexts/partyContext";
import {ShoppingContext} from "./contexts/shoppingContext";
import data from '../src/data'
import AddShoppingList from "./components/addShoppingList";
import AddParty from  './components/addParty';
import Party from './components/partyForm';
import ShoppingForm from './components/shoppingForm';
import {BrowserRouter as Router, Route} from "react-router-dom";
function App() {
 

   
  const initialList =[]

  const shoppingList = [{ item:'BackFatt', price:6900}]
  const [items] = useState(shoppingList)
   

   const [list, setList] =useState([]);
   console.log ("ITEMS FROM APP", items)
   const [party, setParty] = useState([]);

   const addItem = item =>{
     setList([...items, item])

      // const [partyEdit, setPartyEdit] = useState([]);
   }

  return (
  
<div> 

<PartyContext.Provider value ={{party,setParty}}>
 
 
 <Route path ="/" component = {AddParty}/>
  
       
</PartyContext.Provider>


<ShoppingContext.Provider value ={{items}}>

  <Route path ="/shopping" component ={AddShoppingList}/>
</ShoppingContext.Provider>

 
</div>
 

 


   

      
   );
}

export default App;
