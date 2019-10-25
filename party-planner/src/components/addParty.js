import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddParty = props => {

    
console.log("PROPS" ,props)
   
    const [party,setParty]= useState([]);

    const [ parties,setParties]= useState([])

const handleInputChange = e => {


  setParty({
   
     ...party, [e.target.name]:e.target.value,
     user_id:1

  })
}



useEffect(()=> {

  axiosWithAuth().get("/parties")
  .then( res => setParties (res.data))
  .catch(err => console.log(err))

},[])

console.log("PARTIES33", parties)

const idList =parties.map(id => id.id);

 

const addParty = e => {
e.preventDefault();
axiosWithAuth()
.post("/parties", party)
.then(res=> console.log("RES",res.data))

 
}



const deleteParty = id=> {
  // e.preventDefault();
  // const id = props.match.params;
  console.log(id)
 axiosWithAuth()
.delete(`/parties/${id.id}`)
.then(res=> console.log(res.data))


}


return(

  <div> 


    {parties.map (p => {
      return (
      <div>
         <h1>{p.id}</h1>
        <h2>{p.party_name}</h2> 

        <button onClick={(e)=> deleteParty(p)}>x</button>
        </div>)


    })}

<h1>{party.party_name}</h1>
   <form  type = "submit" onSubmit = {addParty}>
      <input
      type="text"
      name= "party_name"
      value= {party.party_name}
      placeholder = "party_name"
      onChange = {handleInputChange}
      
      />
        <input
        type ="text"
        name="n_of_guests"
        value={party.n_of_guests}
        placeholder="# of Guests"
        onChange = {handleInputChange}

        
        
        
        
        /> 


      <input
        type ="date"
        name="date"
        value={party.date}
        placeholder= {Date()}
        onChange = {handleInputChange}

        
        
        
        
        /> 
         <input
        type ={Date()}
        name="theme"
        value={party.theme}
        placeholder="theme"
        onChange = {handleInputChange}

        
        
        
        
        /> 
         
      <button type = "submit">ADD</button>
      
      
      
      











   </form>


</div>






)




};

export default AddParty;
