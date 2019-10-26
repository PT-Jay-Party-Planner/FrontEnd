import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import * as AddP from "../design/addParty-style";

const AddParty = props => {
  const [partyInfo, setPartyInfo] = useState([]);

  const handleChange = e => {
    setPartyInfo({
      ...partyInfo,
      [e.target.name]: e.target.value,
      user_id: 1
    });
  };

  const handleSubmit = e => {
    // e.preventDefault();
    axiosWithAuth()
      .post("/parties", partyInfo)
      .then(res => props.history.push("/dashboard/"))
      .catch(err => console.log(err));
  };

  console.log(partyInfo);
  return (
    <AddP.FormContainer>
      <AddP.FormFields onSubmit={handleSubmit} className="add-party-form">
        <label>
          Party Name
          <input
            type="text"
            placeholder="Party Name"
            name="party_name"
            onChange={handleChange}
          />
        </label>
        <label>
          Number Of Guests
          <input
            type="number"
            placeholder="Number Of Guests"
            name="n_of_guests"
            onChange={handleChange}
          />
        </label>
        <label>
          Party Budget $
          <input
            type="number"
            placeholder="10"
            name="budget"
            onChange={handleChange}
          />
        </label>
        <label>
          Party Date
          <input
            type="date"
            placeholder={Date()}
            name="date"
            onChange={handleChange}
          />
        </label>
        <label>
          Party Theme
          <input
            type="text"
            placeholder="Party Theme"
            name="theme"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </AddP.FormFields>
    </AddP.FormContainer>
  );
};

export default AddParty;
