import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const EditParty = props => {
  const [partyInfo, setPartyInfo] = useState([]);

  const id = props.match.params.id;

 
  const InitialParty = {
    party_name: "",
    N_of_guests: "",
    date: "",
    theme: " "

  }


  const [party, setParty] = useState(InitialParty)



  useEffect(() => {
    axiosWithAuth()
      .get(`/parties/${id}`)
      .then(res => setPartyInfo(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = e => {
    setPartyInfo({
      ...partyInfo,
      [e.target.name]: e.target.value,
      user_id: 1
    });
  };


  // const handleChange = e =>{
  //   setParty ({
  //     ...party,
  //     [e.target.name]:e.target.value,
  //     user_id: 1
  //   })
    

  // }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/parties", partyInfo)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };


const saveEdit = e => {
  e.preventDefault();
  axiosWithAuth()
  .post(`/parties${id}`,party)
  .then(res => {console.log("PUT", res.data)
  
  })
}
useEffect(()=> {
  axiosWithAuth().get("/parties")
  .then( res => console.log (res.data))
  .catch(err => console.log(err))

})
 


  console.log( "PP",partyInfo);
  console.log( "PARTY",party)

  return (
    <div className="edit-party-container">
      <h1>Edit {partyInfo.party_name}</h1>

      <form onSubmit={handleSubmit} className="add-party-form">
        <label>
          Party Name
          <input
            type="text"
            placeholder="Party Name"
            name="party_name"
            onChange={handleChange}
            value={partyInfo.party_name}
          />
        </label>
        <label>
          Number Of Guests
          <input
            type="number"
            placeholder="Number Of Guests"
            name="n_of_guests"
            onChange={handleChange}
            value={party.n_of_guests}
          />
        </label>
        <label>
          Party Budget $
          <input
            type="number"
            placeholder="10"
            name="budget"
            onChange={handleChange}
            value={party.budget}
          />
        </label>
        <label>
          Party Date
          <input
            type="date"
            placeholder={party.date}
            name="date"
            onChange={handleChange}
            value={party.date}
          />
        </label>
        <label>
          Party Theme
          <input
            type="text"
            placeholder="Party Theme"
            name="theme"
            onChange={handleChange}
            value={party.theme}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditParty;
