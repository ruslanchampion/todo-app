import TodoItem from '../TodoItems/TodoItem';
import TodoItemEdited from '../TodoItems/TodoItemEdited';

export default function TodoList({editTask, editTitle, completeTask, deleteTask, task}) {

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
        task.length > 0 ? 
        <h1>Those are your todos!</h1> : 
        <h1>There are no todos in your list!</h1>
      }
      {
        task.map(item => item.edited === false ?
          <TodoItem key={item.id} id={item.id} title={item.title} editTask={editTask} deleteTask={deleteTask} completeTask={completeTask}/> :
          <TodoItemEdited key={item.id} id={item.id} title={item.title} editTask={editTask} editTitle={editTitle}/>
        )
      }
    </article>
  )
}