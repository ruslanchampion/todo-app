import Title from './components/Title/Title';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import {useState} from 'react';
import useTask from './components/hooks/useTask.js';

import './index.css';

export default function App() {

  let [tasks, setTasks] = useState([
    {
      id: 353434343434,
      title: 'hmmm',
      completed: false,
      edited: false,
      },
  ]);

  const createTodo = (newTodo) => {
    setTasks((prev) => [...prev, newTodo])
  }

  return (
    <div className="App">
      <Title/>
      <TodoInput createTodo={createTodo}/>
      <TodoList editTask={editTask} editTitle={editTitle} completeTask={completeTask} deleteTask={deleteTask} task={task}/>
    </div>
  );
}