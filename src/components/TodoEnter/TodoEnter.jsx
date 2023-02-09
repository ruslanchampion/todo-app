import { useState } from "react";
import { v1 as uuidv1 } from 'uuid';

import style from './todo-enter.module.css';

export default function TodoEnter({task, setTask}){

  const [taskInput, setTaskInput] = useState(''); //save entered task name

  function addTask() {
    setTask(//take previous state of task list and add new one
      [...task, {
        id: uuidv1(),
        title: taskInput,
        completed: false,
        edited: false,
      }]
    )
    setTaskInput('')
  }

  return(
    <article className={style.todo_enter_article}>
      <input className={style.todo_enter_input} type="text" value={taskInput} onChange={ (event) => {setTaskInput(event.target.value)} } placeholder='Enter your task here'/>
      <button className={style.todo_enter_button} onClick={()=>{addTask()}}>Add task</button>
    </article>
  )
}