import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const ShoppingItem = props => {
  const [displayEditItem, setDisplayEditItem] = useState(false);
  const [itemList, setItemList] = useState(props.item);

  const handleChange = e => {
    setItemList({
      ...itemList,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/parties/${props.id}/shopping/${props.item.id}`, itemList)
      .then(res => props.setEditItem(!props.editItem))
      .catch(err => console.log(err));
  };

  const whatever = () => {
    setItemList({ ...itemList, price: Number(itemList.price) });
  };

  console.log(itemList);

  return (
    <div>
      <h1>{props.item.item}</h1>
      <h2>${props.item.price}</h2>

      <div className="shopping-form-container">
        <form onSubmit={handleSubmit} className="add-item-form">
          <label>
            Add New Item
            <input
              type="text"
              placeholder="Add Item"
              name="item"
              onChange={handleChange}
              value={itemList.item}
            />
          </label>
          <label>
            Add budget $
            <input
              type="number"
              placeholder="10"
              name="price"
              onChange={handleChange}
              value={itemList.price}
              onBlur={whatever}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingItem;
