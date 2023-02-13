import Title from './components/Title/Title';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

import useTask from './components/hooks/useTask.js';

export default function App() {
  let {editTask, editTitle, completeTask, deleteTask, task, setTask} = useTask();

  return (
    <div className="App">
      <Title/>
      <TodoInput setTask={setTask}/>
      <TodoList editTask={editTask} editTitle={editTitle} completeTask={completeTask} deleteTask={deleteTask} task={task}/>
    </div>
  );
}