import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

import * as Dash from "../design/dashboard";
import { Icon, InlineIcon } from "@iconify/react";
import plusSign from "@iconify/icons-el/plus-sign";

const Dashboard = props => {
  const [partyList, setPartyList] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/parties/")
      .then(res => setPartyList(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Dash.PartyButtonSection>
        <Dash.AddParty>
          <Dash.RouterLink href="/add-party">
            Add Party<br></br>
            <Icon
              style={{ fontSize: "1.5rem", color: "#F58676" }}
              icon={plusSign}
            />
          </Dash.RouterLink>
        </Dash.AddParty>
      </Dash.PartyButtonSection>
      <Dash.DashContainers>
        {partyList.map(id => (
          <Dash.LinkContainer>
            <img src="https://source.unsplash.com/ORSGQc-2Ef8/250x250"></img>
            <Dash.PartyButton>
              <Link to={`/party/${id.id}`}>{id.party_name}</Link>
            </Dash.PartyButton>
          </Dash.LinkContainer>
        ))}
      </Dash.DashContainers>
    </div>
  );
};

export default Dashboard;
