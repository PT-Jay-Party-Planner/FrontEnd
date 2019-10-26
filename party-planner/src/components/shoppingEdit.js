import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { withRouter } from "react-router-dom";

const ShoppingEdit = props => {
  const [displayEditItem, setDisplayEditItem] = useState(false);
  const [itemList, setItemList] = useState(props.item);
  const [newItemList, setNewItemList] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`/parties/${id}/shopping/`)
      .then(res => setItemList(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e, i) => {
    const copy = [...itemList];
    copy[i] = { ...copy[i], [e.target.name]: e.target.value };
    setItemList(copy);
  };

  const handleSubmit = (e, i) => {
    e.preventDefault();
    console.log(i);
    axiosWithAuth()
      .put(`/parties/${id}/shopping/${id}`, itemList[i])
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };

  if (!itemList) return <div>Loading Items...</div>;
  return (
    <div>
      {itemList.map((item, i) => (
        <form
          name={item.id}
          onSubmit={e => handleSubmit(e, i)}
          className="add-item-form"
        >
          <label>
            Edit Item
            <input
              type="text"
              name="item"
              onChange={e => handleChange(e, i)}
              value={item.item}
            />
          </label>
          <label>
            Edit Price
            <input
              type="number"
              name="price"
              onChange={e => handleChange(e, i)}
              value={item.price}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ))}
    </div>
  );
};

export default withRouter(ShoppingEdit);
