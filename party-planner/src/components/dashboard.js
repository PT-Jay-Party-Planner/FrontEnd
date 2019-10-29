import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Dashboard = props => {
  const [partyList, setPartyList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/parties/")
      .then(res => setPartyList(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(partyList);

  const name = localStorage.getItem('username')
  console.log("NAME", name)

  const idList = partyList.map(id => id.id);

  return (
    <>


    <h2>WELCOME,  {name}</h2> 
      {partyList.map(id => (
        <Link to={`/party/${id.id}`}>
          {id.party_name}
          <button>View Party</button>
        </Link>
      ))}

      <Link to="/add-party/1">
        <button>Party 1</button>
      </Link>
    </>
  );
};

export default Dashboard;
