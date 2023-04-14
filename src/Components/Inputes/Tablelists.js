import React from "react";
import './Tablelists.css';

const Tablelist = (props) =>{
    
   const DeletedItems = (id) =>{
        props.deletHandler(id)
    }
    
    
    return(
          <>
           <h2>{props.title}</h2>
          <ul>
          
            { 
            props.items.map((item)=>{
                  return (
                  <li className="new" key={item.id}>
                       {item.price}-{item.name}-{item.table}

                       <button onClick={()=>DeletedItems(item.id)}>Delete Item</button>
                    </li>
                  )
                })
              }
           </ul>
          
          </>
    )
}
export default Tablelist;