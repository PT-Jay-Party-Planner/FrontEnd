import React, { useState , useContext} from "react";
import {useEffect} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import {PartyContext} from '../contexts/partyContext';
 import '../design/party.scss';
 import App from '../App';


const AddParty = props => {


   const initialParties = [];

  const initialParty = {
    id: 0,
    location: "",
    date: "",
    time:"",
    numGuests: "" ,
    budget: ""



  }

   
  const [party, setParty] = useState(initialParty)

 
  const [parties, setParties] = useState(initialParties);

console.log('PARTIES', parties)

   

 
 
 



 




 


   



 const addParty =(e)=> {
  e.preventDefault();
  const newParty = {
    id: party.id ++,
    location: party.location,
    date: party.date,
    time:party.time,
    numGuests: party.numGuests,
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
console.log("DELETE WAS CLICKED")
 console.log("DELETE THIS" ,party, "ID", id)
setParties([filtered])

console.log("FILTER", filtered)

}


// useEffect(()=> {
//   {parties.map(p => {

//     return(
//       <div className= "Party-div"> 
//       <h2>{p.location} </h2>
//             <h2>{p.numGuests}</h2>
//             <h2>{p.theme}</h2>
//             <h2>${p.budget}</h2>
//             <h2>{p.date}</h2>

//             <button onClick={()=>editRow(party)}>EDIT</button>
 

//             <button onClick={()=>deleteParty(p) }>x</button>

//       </div>


//     )
//   })}



// }, [parties.length])

return (
  <div className = "container">

    <div className= "header"> 
  <h1 className ="Party">Ready to create
                          your new party?</h1>
   
                          </div>           


  {parties.map(p => {

    return(
      <div className= "Party-div"> 
      <h2>{p.name}</h2>
      <h2>{p.location} </h2>
             <h2>{p.date}</h2>
             <h2>{p.time}</h2>

            <h2>{p.time}</h2>
            <h2>{p.numGuests}</h2>
            
            <h2>${p.budget}</h2>
        

  

            <button onClick={()=>deleteParty(p) }>x</button>

      </div>


    )
  })}

  <div className = "Form">
 
    <form
        type="submit"
        onSubmit={e => {
          setParties({ ...parties, party });
        }}

         

         
      >
              <div className="Row"> 
              <div className ="name-div"> 
        <label>Party Name</label>
        <input
          type="text"
          placeholder="name"
          onChange={e => setParty({ ...party, name: e.target.value })}
          value={party.name}
          name="location"
        />

                  </div>
                  <div className ="location-div"> 
        <label> Party Location</label>
        {/* <img src = "https://zpl.io/beODEZz"/> */}
        <input
          type="text"
          placeholder="location"
          onChange={e => setParty({ ...party, location: e.target.value })}
          value={party.location}
          name="location"
        />

</div>
        </div>

        <div className ="Row"> 

        <div className = "second-divs"> 
        <label>Party Date</label>
        <input
          type="text"
          placeholder="partyDate"
          onChange={e => setParty({ ...party, date: e.target.value })}
          value={party.date}
          name="Guests"
        />
         </div>

        <div className = "second-divs"> 
        <label> Party Time</label>
        <input type="text"
  placeholder ="time"
  onChange = {e => setParty({...party, time: e.target.value})}
  value={party.time}
  name="time"
/>
</div>
</div>

<div className ="guests"> 
<label>Number of expected guests</label>
<input type="text"
  placeholder ="#num of Guests"
  onChange = {e => setParty({...party, numGuests: e.target.value})}
  value={party.numGuests}
  name="numGuests"
/>
</div>

<div className = "budget"> 
<label>Party Budget</label>
<input type="text"
  placeholder ="budget"
  onChange = {e => setParty({...party, budget: e.target.value})}
  value={party.budget}
  name="budget"
/>
</div>


<div className = "bottom">

 <img src= "https://cdn.zeplin.io/5da64e5e2e044a2ffcc440f3/assets/3908a4a2-3966-474e-bf6b-ca06b391e421.png"/>

</div>


<div className= "button-div"> 

        <button type="submit" onClick={addParty}>
          ADD Party
        </button>
        </div>



        <div className= "footer">

        <img src= "https://cdn.zeplin.io/5da64e5e2e044a2ffcc440f3/assets/4dff3f94-f351-442d-9f98-9d5f7c3e4ef7.png" className="cupcake"/>





</div>
      </form>
        
       
 





 </div>
 







  </div>






  
)




}

export default AddParty;