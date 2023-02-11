import TodoItem from '../TodoItems/TodoItem';
import TodoItemEdited from '../TodoItems/TodoItemEdited';
import useTask from '../hooks/useTask';

export default function TodoList() {

  let {task} = useTask();

  return(
    <article style={{
      width: '50vw',
      height: '55vh',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'space-between',
    }}>
      {
        task.map(item => item.edited === false ?
          <TodoItem key={item.id} id={item.id} title={item.title}/>
          : <TodoItemEdited key={item.id} id={item.id} title={item.title}/>
        )
      }
    </article>
  )
}