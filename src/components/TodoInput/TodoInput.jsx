import useInput  from '../hooks/useInput.js';
import Button from '../UI/button/Button.jsx';
import Input from '../UI/input/Input.jsx';

export default function TodoEnter({createTodo}){

  const input = useInput('');

  function addTask() {
    let newTodo = {
      id: crypto.randomUUID(),
      title: input.value,
      completed: false,
      edited: false,
    };
    
    createTodo(newTodo)
    // setTaskInput(() => '')
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
      <Input type="text" {...input} placeholder='Enter your task here'/>
      <Button onClick={addTask}>Add task</Button>
    </article>
  )
}