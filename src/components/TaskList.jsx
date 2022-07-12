import React , {useState} from 'react'
import {v4 as uuid} from "uuid";
import "./TaskList.css"
import { Timer } from './Timer';

const TaskList = () => {
    const [item, setItem] = useState("");
    const [list, setList] = useState([]);

     const addItem = (e) =>{
        //  console.log(e.target.value)
      setItem(e.target.value);
    //   console.log(item)
     }

     const addList = () =>{
        //  console.log(item)
         const obj = {items:item, key : uuid()}
         setList([...list, obj])
        //  console.log(list)
         setItem("")
     }

     const del = (key) =>{
      setList(list.filter((e)=>e.key !== key))

     }
  return (
    <>
    <div className='nav'>
     <h1>TODO WEB APP</h1>
    </div>
    <h3>Tasks List</h3>
    <input type="text" placeholder='Enter your Task' value = {item} onChange={(e)=> addItem(e)}/>
       <button onClick={addList}>Add Task</button>
       <div>
       {
           list.map(({items,key})=>
           <div key={key}>{items}
             <button onClick={() =>del(key)}>completed</button>
             <Timer/>
           </div>
           )
       }
       </div>
    </>
  )
}

export default TaskList;