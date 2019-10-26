import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddShoppingList = props => {
  const id = props.match.params.id;
  const [shoppingList, setShoppingList] = useState([]);
  const [budget, setBudget] = useState([]);

  const calculator = (bud, price) => {
    if (bud) {
      const total = price.reduce((acc, obj) => acc + obj.price, 0);
      console.log(total);
      return bud - total;
    }
  };

  const handleChange = e => {
    setShoppingList({
      ...shoppingList,
      [e.target.name]: e.target.value,
      party_id: id,
      purchase: false
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/parties/${id}/shopping`, shoppingList)
      .then(res => props.history.push(`/shopping-list/${id}`))
      .catch(err => console.log(err));
  };

  const addItem = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`parties/${id}/shopping`, shoppingList)
      .then(res => setShoppingList(res.data))
      .catch(err => console.log(err));
  };

  const ShoppingButton = () => {
    if (!shoppingList.id) {
      return null;
    } else return;
    shoppingList.map(item => (item.name, item.price));
  };

  return (
    <div className="shopping-list-container">
      {/* {shoppingList.map(item => (item.name, item.price))} */}
      <ShoppingButton />

      <form onSubmit={handleSubmit}>
        <label>
          Add Item
          <input
            type="text"
            placeholder="Add Item"
            name="item"
            onChange={handleChange}
          />
        </label>
        <label>
          Add Price
          <input
            type="number"
            placeholder="10"
            name="price"
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={addItem}>
          Add Item
        </button>
        <br />
        <br />
        <button type="submit">Finish</button>
      </form>
    </div>
  );
};

export default AddShoppingList;
