import { useState } from "react";
import { v1 as uuidv1 } from 'uuid';
import style from './todo-enter.module.css';
// import script from './todoEnterButton.js'; --- ломает приложение

export default function TodoEnter({task, setTask}){
  // script(); --- так надо импортировать?
  // const [taskInput, setTaskInput] = useState('');

  // function addTask() {
  //   setTask(
  //     [...task, {
  //       id: uuidv1(),
  //       title: taskInput,
  //       status: true
  //     }]
  //   )
  //   setTask()
  // }
  //{<input type="text" placeholder="Enter a task here" value={taskInput} onChange={(event) => setTaskInput(event.target.value)}/>
  //<button onClick={ ()=>{addTask()} }>Add task</button>}

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
    <article className={style.todo_enter_article}>{/*тут нельзя ставить тире в названии класса?*/}
      <input className={style.todo_enter_input} type="text" value={taskInput} onChange={ (event) => {setTaskInput(event.target.value)} } placeholder='Enter your task here'/>
      <button className={style.todo_enter_button} onClick={()=>{addTask()}}>Add task</button>
      {/* <button onClick={addTask}>Add task</button>почему тут без скобок работает в отличии от функции editTask? */}
      {/* <button onClick={()=>{addTask()}}>Add task</button>почему тут работает внутри стерлочной функции? */}
    </article>
  )
}