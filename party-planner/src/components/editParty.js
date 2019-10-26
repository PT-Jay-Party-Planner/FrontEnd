import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import * as EditP from "../design/editparty-style";

const EditParty = props => {
  const [partyInfo, setPartyInfo] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`/parties/${id}`)
      .then(res => setPartyInfo(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = e => {
    setPartyInfo({
      ...partyInfo,
      [e.target.name]: e.target.value,
      user_id: 1
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/parties/${id}`, partyInfo)
      .then(res => props.history.push(`/party/${id}`))
      .catch(err => console.log(err));
  };

  const deleteParty = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/parties/${id}`)
      .then(res => props.history.push(`/dashboard/`))
      .catch(err => console.log(err));
  };

  return (
    <EditP.EditPartyContainer>
      <h1>Edit Your Party</h1>

      <EditP.EditPartyForm onSubmit={handleSubmit} className="add-party-form">
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
            value={partyInfo.n_of_guests}
          />
        </label>
        <label>
          Party Budget $
          <input
            type="number"
            placeholder="10"
            name="budget"
            onChange={handleChange}
            value={partyInfo.budget}
          />
        </label>
        <label>
          Party Date
          <input
            type="date"
            placeholder={partyInfo.date}
            name="date"
            onChange={handleChange}
            value={partyInfo.date}
          />
        </label>
        <label>
          Party Theme
          <input
            type="text"
            placeholder="Party Theme"
            name="theme"
            onChange={handleChange}
            value={partyInfo.theme}
          />
        </label>
        <button type="submit">Submit</button>
      </EditP.EditPartyForm>

      <EditP.DeleteParty onClick={deleteParty}>Delete Party</EditP.DeleteParty>
    </EditP.EditPartyContainer>
  );
};

export default EditParty;
