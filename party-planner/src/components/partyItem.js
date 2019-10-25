import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

const PartyItem = props => {
  const [displayEditItem, setDisplayEditItem] = useState(false);
  const [partyData, setPartyData] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`/parties/${id}`)
      .then(res => setPartyData(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!partyData) return <div>Loading Party...</div>;
  return (
    <div>
      <h1>Name: {partyData.party_name}</h1>
      <h2>Number of Guests: {partyData.n_of_guests}</h2>
      <h2>Date: {partyData.date}</h2>
      <h2>Budget: ${partyData.budget}</h2>
      <h2>Theme: {partyData.theme}</h2>
      <Link to={`/edit-party/${id}`}>Edit Party</Link>
    </div>
  );
};

export default PartyItem;
