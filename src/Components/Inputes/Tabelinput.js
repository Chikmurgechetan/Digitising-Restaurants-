import React, { useState } from "react";
import './Tableinput.css'
const Tabelinput = (props) =>{
   
   const [orderId,setOrderId] = useState('')
   const [orderPrice,setOrderPrice] = useState('')
   const [dishName,setDishName] = useState('')
   const [table, setEnterTable] =useState('')

 
 
   const SubmitHandler = (event) =>{
     event.preventDefault();

    if(orderId !== "" && orderPrice !== "" && dishName !== ""){
     props.onAddProduct(orderId,orderPrice,dishName,table)
     setOrderId('')
     setOrderPrice('')
     setDishName('')
     setEnterTable('')
    }
    else{
      alert('Please fill the all the blocks')
    } 
   }




   const changeIdHandler = (event) =>{
    setOrderId(event.target.value)
   }

     const changePriceHandler = (event) =>{
      setOrderPrice(event.target.value)
     }
     
     const changDishNameHandler = (event) =>{
       setDishName(event.target.value)
     }

     const changTableHandler = (event) =>{
       setEnterTable(event.target.value)
     }

   
   
    return(
      <>
       <div  className="main_div">
      <h1>Tables</h1>
      <form onSubmit={ SubmitHandler}>
       
            <label htmlFor="id"> Order Id</label>
            <input
                type="nummber"
                id="id" 
                value={orderId}
                onChange={changeIdHandler} 
                autoComplete="off"/>
 
             <label htmlFor="price" > Choose Price:</label>
             <input 
                type="number" 
                id='price'   
                value={orderPrice}
                onChange={changePriceHandler}
                autoComplete="off"/>
                        
            <label htmlFor="name">Choice Dish:</label>
            <input 
             type="text"
             id="name"
             value={dishName} 
             onChange={ changDishNameHandler}
             autoComplete="off" />
            
             <label htmlFor="tables">Choose a Table:</label>
            <select id="tables" value={table} onChange={changTableHandler} >
              <option value="">Chooses an Table--</option>
                <option value='table1'>Table 1</option>
                <option value='table2'>Table 2</option>
                <option value='table3'>Table 3</option>
                
            </select>
            <button type="submit"> Add to Bill </button>
    
      </form>
      </div>
      </>
    )
}
export default Tabelinput;