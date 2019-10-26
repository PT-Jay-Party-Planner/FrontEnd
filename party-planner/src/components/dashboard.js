import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

import * as Dash from "../design/dashboard";

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

  return (
    <div className="dashboard-container">
      {partyList.map(id => (
        <Dash.DashContainers>
          <Dash.ImportImage>
            <img src="https://source.unsplash.com/ORSGQc-2Ef8/250x250"></img>
          </Dash.ImportImage>
          <Dash.PartyButton>
            <Link className="party-item" to={`/party/${id.id}`}>
              {id.party_name}
            </Link>
          </Dash.PartyButton>
        </Dash.DashContainers>
      ))}
    </div>
  );
};

export default Dashboard;
