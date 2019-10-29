import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
 

// import ShoppingItem from "../components/shoppingItem";

const ShoppingList = props => {

  console.log("PROPS", props)

  let fakeBudget = 1000;

 const [budget, setBudget]= useState([])

  const [item, setItem]= useState([])
  
  const [editing, setEditing] = useState(false)
 
  const [items, setItems]= useState([])


 
  

  // let total = items.reduce((acc, item)=> acc+ item.price,0)
  // console.log("TOTAL", total)

  // const [totalPrice, setTotalPrice] = useState([total])

 
//    const calc = (bud, price)=>{
//     let total = items.reduce((acc, item)=> acc+ item.price,0)

//      if (bud){
//       return bud - total
// }

//    }

  //  const expense =  calc(budget, total)

 
   const id = props.match.params.id
   console.log( "ID",id)




   
    

    


   const deleteItem = id => {
    
    axiosWithAuth().delete(`parties/ ${id}/shopping/${id}`)
    .then(res=> console.log(res.data))
    .catch(err => console.log(err))

    console.log( "DELETE",id)
    

    
   }

    

  useEffect(()=> {
     
    // axiosWithAuth().get(`parties/${id}/shopping`)
    //  .then(res=> console.log("RES P", res))
    // .then(res =>  setItems(res.data))
    // .catch(err => console.log(err))

    let  newList = [{item: "wine", price:20}, {item: "BEER", price:20}]

    setItems (newList)

    console.log("NEW ITEMS", items)
    axiosWithAuth().get('/parties')
    .then(res=> console.log("HERE", res))
    .catch(err => console.log(err))

    axiosWithAuth().get(`/parties/${id}`)
       .then(res=> console.log("RES",res.data ))
      // .then(res=> setBudget(res.data.budget) )

    .catch(err => console.log(err))


    //  setBudget(100)

  console.log("BUDGET1", budget)

    console.log("ITEMS", items)




  }, [])

   
  // let total = items.reduce((acc, item)=> acc+ item.price,0)
  // console.log("TOTAL", total)


  const addItem = e => {
    e.preventDefault();
     
    axiosWithAuth()
    // .post(`/parties/${id}/shopping`)
    .post(`https://pt-jay-party-planner.herokuapp.com/parties/${id}/shopping`, item)
    .then(res => console.log("POSTED",res.data))
    .catch(err=> console.log(err))

    console.log("ITEM ADD", item)
    // setItems([...items, item])
    //    console.log("TOTAL", total)
    //    setBudget( calc(budget, total))
 
  

  }
  

  const handleInputChange = e => {


    setItem({
     
       ...item, [e.target.name]:e.target.value,
       
  
    })
  }

  
console.log( "BUDGET",budget)

  return (

     <div>
       <h1>Shopping List</h1>

       <h2>Budget${budget}</h2>
       <h2>fake {fakeBudget}</h2>
       {/* <h3> total  {total}</h3> */}
        
        
       

       {items.map (item => {
          return(
             
            <div>
             
            {/* <div style={{textDecoration: check? 'line-through' : ''}}className="todo">{item.item}/> */}
                      
 
              
              <h2>{item.item}</h2>
           <h2>${item.price}</h2>

           <button onClick={()=>deleteItem(item.id)} >x</button>

 



              </div>



          )
       



       })}
      
       <div>
       <form type = "submit">
        <input
         type="text"
         name = "item"
         value = {item.item}
         onChange = {handleInputChange}
        
        
        
        />

<input
         type="text"
         name = "price"
         value = {item.price}
         onChange = {handleInputChange}
        
        
        
        />


        <button type= "submit" onClick={addItem}> ADD</button>






       </form>



       </div>
        



     </div>
  )

}

export default ShoppingList;
