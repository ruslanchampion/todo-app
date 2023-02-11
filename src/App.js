import Title from './components/Title/Title';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

export default function App() {

  return (
    <div className="App">
      <Title/>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}