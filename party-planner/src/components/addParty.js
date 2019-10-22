import React, { useState } from "react";
import {useEffect} from "react";
import { BrowserRouter as Router} from "react-router-dom";
 import '../design/index.less';
import '../design/party.css';


const AddParty = props => {

  const initialParties = [];

  const initialParty = {
    id: 0,
    location: "",
    numGuests: "",
    theme: "",
    date: "",
    budget: ""



  }

  const [party, setParty] = useState(initialParty)

  const [parties, setParties] = useState(initialParties);

   



 const addParty =(e)=> {
  e.preventDefault();
  const newParty = {
    id: party.id ++,
    location: party.location,
    numGuests: party.numGuests,
    theme: party.theme,
    budget:party.budget
  };
  setParties([...parties, newParty]);
 };



 const deleteParty = (party) => {
  let id = party.id
 const filtered = parties.filter(item => {
 if (item.id !==id) {
   return item;
 }}
)

console.log("PARTIES1", parties)
console.log("DELETE THIS" ,party, "ID", id)
setParties([filtered])

console.log("FILTER", filtered)

}


return (
  <div>
  <h1 className ="Party">Party</h1>


  {parties.map(p => {

    return(
      <div className= "Party-div"> 
      <h2>{p.location} </h2>
            <h2>{p.numGuests}</h2>
            <h2>{p.theme}</h2>
            <h2>${p.budget}</h2>
            <h2>{p.date}</h2>
 

            <button onClick={()=>deleteParty(p) }>x</button>

      </div>


    )
  })}

  <div>
    <form onSubmit = {()=> addParty}>

    <form
        type="submit"
        onSubmit={e => {
          setParties({ ...parties, party });
        }}

         

         
      >
        <input
          type="text"
          placeholder="location"
          onChange={e => setParty({ ...party, location: e.target.value })}
          value={party.location}
          name="location"
        />
        <input
          type="text"
          placeholder="# of guests"
          onChange={e => setParty({ ...party, numGuests: e.target.value })}
          value={party.numGuests}
          name="Guests"
        />
        <input type="text"
  placeholder ="theme"
  onChange = {e => setParty({...party, theme: e.target.value})}
  value={party.theme}
  name="theme"
/>
<input type="text"
  placeholder ="date"
  onChange = {e => setParty({...party, date: e.target.value})}
  value={party.date}
  name="date"
/>
<input type="text"
  placeholder ="budget"
  onChange = {e => setParty({...party, budget: e.target.value})}
  value={party.budget}
  name="budget"
/>

        <button type="submit" onClick={addParty}>
          ADD Party
        </button>
      </form>







    </form>








  </div>






  </div>
)




}

export default AddParty;