import React, {useState} from 'react';
import { v1 as uuidv1 } from 'uuid';
/*Import components*/
import Title from './components/Title/Title';
import TodoEnter from './components/TodoEnter/TodoEnter';
import TodoList from './components/TodoList/TodoList';

import './App.css';

export default function App() {

  const [task, setTask] = useState([
    {
      id: uuidv1(),
      title: 'Example task#1',
      completed: false,
      edited: false,
    },
    {
      id: uuidv1(),
      title: 'Example task#2',
      completed: false,
      edited: false,
    },
  ])

  return (
    <div className="App">
      <Title />
      <TodoEnter task={task} setTask={setTask}/>
      <TodoList task={task} setTask={setTask}/>
    </div>
  );
}