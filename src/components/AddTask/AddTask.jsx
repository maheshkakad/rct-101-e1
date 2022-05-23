import React, { useState } from "react";
import styles from "./addTask.module.css";
import Todoitem from 'index';

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  let [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handlechange=(e) => {
    setTask(e.target.value);
  }

  const handleclick =() => {
    setTodo([...todo, task])
    setTask=("")
  }
const todoDone =()=> {

 } 
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={task} onChange={handlechange} />
      <button data-cy="add-task-button" onClick={() => handleclick()}>add</button>
       <div className={styles.todoList}></div>

       {todo.map((item) => {
           
         return <div> 
           <p>{item} <input type="radio" onChange={todoDone()} /></p>
         </div>
       })}
    </div>
   
  );
};

export default AddTask;
