import {useState} from 'react';
/*Import components*/
import Title from './components/Title/Title';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

export default function App() {

  let exampleTask = [
    {
      id: crypto.randomUUID(),
      title: 'This is an example task. Click "delete" to remove the task.',
      completed: false,
      edited: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'This is an example task. Click "delete" to remove the task.',
      completed: false,
      edited: false,
    },
    {
      id: crypto.randomUUID(),
      title: 'This is an example task. Click "delete" to remove the task.',
      completed: false,
      edited: false,
    },
  ];

  const [task, setTask] = useState(exampleTask)

  return (
    <div className="App">
      <Title />
      <TodoInput setTask={setTask}/>
      <TodoList task={task} setTask={setTask}/>
    </div>
  );
}