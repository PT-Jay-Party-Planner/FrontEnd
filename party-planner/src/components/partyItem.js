import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

import * as PartyS from "../design/partyitem-style";

const PartyItem = props => {
  const [displayEditItem, setDisplayEditItem] = useState(false);
  const [partyData, setPartyData] = useState({});

  const id = props.match.params.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`/parties/${id}`)
      .then(res => setPartyData(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!partyData.id) return <div>Loading Party...</div>;

  return (
    <PartyS.PartyInfo>
      <h1>Name: {partyData.party_name}</h1>
      <h2>Number of Guests: {partyData.n_of_guests}</h2>
      <h2>Date: {partyData.date.slice(0, 10)}</h2>
      <h2>Budget: ${partyData.budget}</h2>
      <h2>Theme: {partyData.theme}</h2>
      <PartyS.Buttons>
        <PartyS.EditPartyB>
          <Link to={`/edit-party/${id}`}>Edit Party</Link>
        </PartyS.EditPartyB>

        <PartyS.EditShopB>
          <Link to={`/shopping-list/${id}`}>Edit Shopping List</Link>
        </PartyS.EditShopB>
      </PartyS.Buttons>
    </PartyS.PartyInfo>
  );
};

export default PartyItem;
