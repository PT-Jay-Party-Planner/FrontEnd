import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

import ShoppingItem from "../components/shoppingItem";

const ShoppingList = props => {
  const id = props.match.params.id;
  const [shoppingList, setShoppingList] = useState([]);
  const [budget, setBudget] = useState([]);
  const [editItem, setEditItem] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get(`/parties/${id}/shopping/`)
      .then(res => setShoppingList(res.data))
      .catch(err => console.log(err));

    axiosWithAuth()
      .get(`/parties/${id}`)
      .then(res => setBudget(res.data))
      .catch(err => console.log(err));
  }, [editItem]);

  console.log(shoppingList);

  const calculator = (bud, price) => {
    if (bud) {
      const total = price.reduce((acc, obj) => acc + obj.price, 0);
      console.log(total);
      return bud - total;
    }
  };

  return (
    <div className="shopping-list-container">
      <div className="budget-section">
        Total Budget Remaining! ${calculator(budget.budget, shoppingList)}
      </div>
      {shoppingList.map(item => (
        <ShoppingItem
          key={id}
          item={item}
          editItem={editItem}
          setEditItem={setEditItem}
          id={budget.id}
        />
      ))}
    </div>
  );
};

export default ShoppingList;
