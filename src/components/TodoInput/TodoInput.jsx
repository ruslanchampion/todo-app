import { useState } from "react";
import useTask from '../hooks/useTask';

import style from './TodoInput.module.css';

export default function TodoEnter(){

  const {setTask} = useTask();
  const [taskInput, setTaskInput] = useState('');

  function addTask() {
    let taskToAdd = {
      id: crypto.randomUUID(),
      title: taskInput,
      completed: false,
      edited: false,
    };

    setTask((prev) => [...prev, taskToAdd])

    setTaskInput(() => '')
  }

  function handlerInputChange(event) {
    setTaskInput(event.target.value)
  }

  return(
    <article className={style.article}>
      <input className={style.input} type="text" value={taskInput} onChange={handlerInputChange} placeholder='Enter your task here'/>
      <button className={style.button} onClick={addTask}>Add task</button>
    </article>
  )
}