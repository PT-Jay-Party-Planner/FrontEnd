import React, { useContext } from "react";
import { ShoppingContext } from "../contexts/shoppingContext";

const ShoppingList = () => {
  const { shoppingList, setShoppingList } = useContext(ShoppingContext);
  const { partyBudget, setPartyBudget } = useContext(ShoppingContext);

  const handleSubmit = () => {
    console.log("submit");
  };

  const budgetSubtract = e => {
    e.preventDefault();
    let newBudget = null;
    newBudget = partyBudget - e.target.value;
    setPartyBudget(newBudget);
  };

  return (
    <div className="shopping-list-container">
      {shoppingList.map(a => a.name)}

      <div className="shopping-form-container">
        <form onSubmit={handleSubmit} className="add-item-form">
          <label>
            Add New Item
            <input
              type="text"
              placeholder="Add Item"
              onChange={e => setShoppingList({ itemName: e.target.value })}
              value={shoppingList.item}
            />
          </label>
          <label>
            Add budget $
            <input
              type="number"
              placeholder="10"
              onChange={e => budgetSubtract}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingList;
