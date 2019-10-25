import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Dashboard = props => {
  const [partyList, setPartyList] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/parties/")
      .then(res => setPartyList(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(partyList);

  const idList = partyList.map(id => id.id);

  return (
    <>
      {partyList.map(id => (
        <Link to={`/party/${id.id}`}>{id.party_name}</Link>
      ))}
    </>
  );
};

export default Dashboard;
