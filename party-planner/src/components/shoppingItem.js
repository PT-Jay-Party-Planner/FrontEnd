import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
const ShoppingItem = props => {
  const [itemList, setItemList] = useState();
  const [budget, setBudget] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    axiosWithAuth()
      .get(`/parties/${id}/shopping/`)
      .then(res => setItemList(res.data))
      .catch(err => console.log(err));
    axiosWithAuth()
      .get(`/parties/${id}`)
      .then(res => setBudget(res.data))
      .catch(err => console.log(err));
  }, []);

  const checkmark = e => {
    if (e.target.value === true) {
    }
  };

  if (!itemList) return <div>Loading Items...</div>;

  const ShoppingButton = () => {
    if (itemList.length > 0) {
      return (
        <Link to={`/edit-shopping-list/${id}`}>
          <button>Edit List</button>
        </Link>
      );
    } else
      return (
        <Link to={`/add-shopping-list/${id}`}>
          <button>Add List</button>
        </Link>
      );
  };

  return (
    <div>
      Total Budget Remaining: ${budget.budget}
      {itemList.map(item => (
        <div>
          <h1>{item.item}</h1> <h2>${item.price}</h2>
          <span> Purchased?</span>
          <input type="checkbox" onChange={checkmark} />
        </div>
      ))}
      <ShoppingButton />
    </div>
  );
};

export default ShoppingItem;
