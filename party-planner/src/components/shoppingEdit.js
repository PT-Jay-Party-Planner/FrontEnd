import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { withRouter } from "react-router-dom";

const ShoppingEdit = props => {
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
      .then(res => props.history.push(`/shopping-list/${props.id}`))
      .catch(err => console.log(err));
  };

  const blurHandler = () => {
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
            Edit Item
            <input
              type="text"
              placeholder="Add Item"
              name="item"
              onChange={handleChange}
              value={itemList.item}
            />
          </label>
          <label>
            Edit Budget $
            <input
              type="number"
              placeholder="10"
              name="price"
              onChange={handleChange}
              value={itemList.price}
              onBlur={blurHandler}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(ShoppingEdit);