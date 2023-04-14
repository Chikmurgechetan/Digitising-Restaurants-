
import { useEffect, useState } from 'react';
import './App.css';
import Tabelinput from './Components/Inputes/Tabelinput';
import Tablelist from './Components/Inputes/Tablelists';


const GetLocalIems = () =>{
  let order = localStorage.getItem('orders')
  if(order)
  {
    return JSON.parse(localStorage.getItem('orders'))
  } else{
    return [];
  }
}



function App(props) {
      

 const[enterList,setEnterList] = useState(GetLocalIems())

     const AddList = (id,price,dish,table) =>{
      const newArry = {id:id, price:price, name:dish, table:table}
      setEnterList([...enterList,newArry])
      console.log(newArry);
      }
           
     const deletHandler = (id) =>{
       setEnterList((prvesList) =>{
        let newList = prvesList.filter((newItem)=>newItem.id !== id)
       return newList;
      })
     }


    useEffect(()=>{
        return localStorage.setItem('orders',JSON.stringify(enterList))
    },[enterList])


  return (
    <div className="App">
     <Tabelinput onAddProduct={AddList}/>
     
      <Tablelist
        key="table1"
        title="TABLE 1"
        items={enterList.filter((item) => item.table === "table1")}
        deletHandler={deletHandler}
      ></Tablelist>
      <Tablelist
        key="table2"
        title="TABLE 2"
        items={enterList.filter((item) => item.table === "table2")}
        deletHandler={deletHandler}
      ></Tablelist>
      <Tablelist
        key="table3"
        title="TABLE 3"
        items={enterList.filter((item) => item.table === "table3")}
        deletHandler={deletHandler}
      ></Tablelist>
    


    </div>
  );
}

export default App;
