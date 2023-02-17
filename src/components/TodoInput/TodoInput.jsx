import { useState } from "react";
import Button from '../UI/button/Button.jsx';
import Input from '../UI/input/Input.jsx';

export default function TodoEnter({setTask}){

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
    <article style={
      {
        width: '50vw',
        height: '15vh',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }
    }>
      <Input type="text" value={taskInput} onChange={handlerInputChange} placeholder='Enter your task here'/>
      <Button onClick={addTask}>Add task</Button>
    </article>
  )
}