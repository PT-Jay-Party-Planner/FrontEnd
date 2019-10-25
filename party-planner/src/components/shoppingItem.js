import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
const ShoppingItem = props => {
  const [itemList, setItemList] = useState(props.item);
  const id = props.match.params.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`/parties/${id}/shopping/`)
      .then(res => setItemList(res.data))
      .catch(err => console.log(err));
  }, []);

  const checkmark = e => {
    if (e.target.value === true) {
    }
  };

  console.log(itemList);
  if (!itemList) return <div>Loading Items...</div>;
  return (
    <div>
      {itemList.map(item => (
        <div>
          <h1>{item.item}</h1> <h2>${item.price}</h2>
          <span> Purchased?</span>
          <input type="checkbox" onChange={checkmark} />
        </div>
      ))}
      <Link to={``}>
        <button>Edit List</button>
      </Link>
    </div>
  );
};

export default ShoppingItem;
