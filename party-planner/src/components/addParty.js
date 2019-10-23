import React, { useContext } from "react";
import { PartyContext } from "../contexts/partyContext";

const AddParty = () => {
  const { partyList, setPartyList } = useContext(PartyContext);

  return (
    <div className="add-party-container">
      <label>
        Number Of Guests
        <input
          type="text"
          placeholder="Number of Guests"
          onChange={e => setPartyList({ guests: e.target.value })}
        />
      </label>
      <label>
        Theme
        <input
          type="text"
          placeholder="Theme"
          onChange={e => setPartyList({ theme: e.target.value })}
        />
      </label>
    </div>
  );
};

export default AddParty;
