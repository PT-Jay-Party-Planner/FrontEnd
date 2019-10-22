import React , {useState, useEffect} from 'react';
import{ useContext} from 'react';
import {ShoppingContext} from '../contexts/shoppingContext';
import data from '../data';
import ShoppingItem from './shoppingItem';



const AddShoppingList = (props)=> {
      
    let initialBudget =1000.00;
    // let message ='';
     let initialMessage =""
    
    const initialItem = {
        id :0,
         item:"",
        price: ""
    }

    const {items} = useContext(ShoppingContext);

     const initialItems = []
     const [cart, setCart] = useState(items)

     const [list, setList] = useState(initialItems)
    const [item, setItem] = useState(initialItem);
    const [budget, setBudget]= useState(initialBudget)
    const [message, setMessage]= useState(initialMessage);
    //  const budget = 1000;
     console.log( "ITEMS", items)
     console.log("LIST", list )
      console.log("PROPS", props.match.params)
     

     

     const deleteItem = (item ,e ) => {
      //  e.preventDefault();
           

      console.log("DELETE THIS", item)

 
        console.log("DELETE THIS", item)
        //  e.preventDefault()

        const id = item.id;
        console.log( "D>ID",id)
        console.log(" D LIST" ,list)
          
        const filtered = list.filter(item => {
          if (item.id !==id) {
            return item;
          }}
        )

        setList([filtered])

        console.log("SHOPPING FILTER", filtered)

         

 
     }
      

     const addThing = e => {
         e.preventDefault();
         const newItem ={
             id: item.id++,
              item: item.item,
             price: item.price,
             budget: budget-item.price 
         };

         const  id = props.match.params
          newItem.id+=1;


          const total =()=>{
            
            let newBudget = budget-item.price
          
          return newBudget.toFixed(2)
          
          }
          
      //  setBudget([budget-item.price])
       setBudget([total()])
         setList([...list, newItem]);
           
 
         //  console.log("BUDGET2!",budget)


         if (budget <=0){
             console.log("no money left!")
              setMessage( "NO $$$")     }
             else{
                 console.log("KEEP SPENDIN")

             }
      }


      //  useEffect(()=> {

      //   {list.map( item => {
      //     return(
      //        <div className ="item-div" key={item.id}>
      //       <h2> HERE{item.id}</h2>
      //     <h2>{item.item}</h2>
      //     <h2>{item.price}</h2>
      //     <button onClick = { (e)=> e.preventDefault ,deleteItem(item)}>{item.id}</button>
      //         </div> 
          
          
      //     )
      // })}






      //  }, [])







 

    return(
      <div>

        <h1>Shopping List</h1>
                <h2>${budget}</h2>
          {list.map (item=> {

            return <div>
              <h3>{item.id}</h3>
              <h2>{item.item}</h2>
              <h2>{item.price}</h2>
              <button onClick = {(e)=> {deleteItem(item)}}>X</button>



              </div>

          })}

<div className = "shopping-form">
            <form  
            >
               <input
               type="text"
               value={item.item}
               onChange = {e=> setItem({...item,  item:e.target.value})}
               placeholder="item"
               name = "item"

               
               /> 
               <input
                type= "text"
                value={item.price}
                onChange ={e=> setItem({...item, price: e.target.value})}
                placeholder="price"
                name="price"
               
               
               />
     
                      <button type="submit"
                       onClick={addThing}>
                            Add Item
                       </button>

            </form>


              </div>



      </div>

         
      
    )

 
 


}


export default AddShoppingList;