import Title from './components/Title/Title';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import {useState} from 'react';

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

  let callback = {
    
    createTodo (newTodo) {
      setTasks((prev) => [...prev, newTodo]);
    },
  
    deleteTodo (todoId) {
      setTasks(prev => prev.filter(item => item.id !== todoId));
    },
  
    editModeTodo (todoId) {
      setTasks(prev => prev.map(item => item.id === todoId ? {...item, edited: !item.edited} : item));
    },
  
    editTodoTitle (todoId, newTitle) {
      setTasks(prev => prev.map(item => item.id === todoId ? {...item, title: newTitle} : item));
    },
  
    completeTodo (todoId) {
      setTasks(prev => prev.map(item => item.id === todoId ? {...item, completed: !item.completed} : item));
      console.log(tasks)
    },
  }
  

  return (
    <div className="App">
      <Title/>
      <TodoInput callback={callback}/>
      <TodoList 
        callback={callback}
        tasks={tasks}
      />
    </div>
  );
}