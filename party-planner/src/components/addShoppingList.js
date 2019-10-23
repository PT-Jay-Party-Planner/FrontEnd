import React, { useContext, useState } from "react";
import { ShoppingContext } from "../contexts/shoppingContext";

const ShoppingList = () => {
  const { shoppingList, setShoppingList } = useContext(ShoppingContext);
  const { partyBudget, setPartyBudget } = useContext(ShoppingContext);

  const [shoppingData, setShoppingData] = useState({
    name: "",
    cost: ""
  });

  const [displayFormData, setDisplayFormData] = useState({
    budg: ""
  });

  const [displayEditBudget, setDisplayEditBudget] = useState(false);

  setPartyBudget(0);

  const handleSubmit = e => {
    e.preventDefault();
    setShoppingList([...shoppingList, { name: shoppingData.name }]);
    setPartyBudget(partyBudget - shoppingData.cost);
  };

  const handleChange = e => {
    setShoppingData({
      ...shoppingData,
      [e.target.name]: e.target.value
    });
  };

  const displayHandleChange = e => {
    setDisplayFormData({
      ...displayFormData,
      [e.target.name]: e.target.value
    });
  };

  const displayForm = e => {
    e.preventDefault();
    setDisplayEditBudget(!displayEditBudget);
  };

  const displayFormSubmit = e => {
    e.preventDefault();
    setPartyBudget(displayFormData.budg);
    console.log(displayFormData.budg);
  };

  return (
    <div className="shopping-list-container">
      <div className="budget-section">
        ${partyBudget}
        {displayEditBudget && (
          <form onSubmit={displayFormSubmit}>
            <input
              type="number"
              placeholder="enter budget"
              name="budg"
              defaultValue={partyBudget}
              onChange={displayHandleChange}
            />
            <button type="submit">Save</button>
          </form>
        )}
        <div className="edit-budget-button">
          <button onClick={e => displayForm(e)}>Edit Budget</button>
        </div>
      </div>
      {shoppingList.map(a => a.name)}

      <div className="shopping-form-container">
        <form onSubmit={handleSubmit} className="add-item-form">
          <label>
            Add New Item
            <input
              type="text"
              placeholder="Add Item"
              name="name"
              onChange={handleChange}
              value={shoppingData.name}
            />
          </label>
          <label>
            Add budget $
            <input
              type="number"
              placeholder="10"
              name="cost"
              onChange={handleChange}
              value={shoppingData.cost}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingList;
