import React from 'react';


const ShoppingItem = props => {
    console.log(" ITEM PROPS", props)



    
  

    return (
        <div key = {props.item.id}>
          <h1>{props.item.id}</h1>
           <h1>{props.item.item}</h1>
          <h2>{props.item.price}</h2>
          <button onClick ={props.delete}>X</button>



        </div>
    )
}

export default ShoppingItem;