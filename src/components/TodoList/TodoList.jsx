import TodoItem from '../TodoItems/TodoItem';
import TodoItemEdited from '../TodoItems/TodoItemEdited';

export default function TodoList( {task, setTask} ) {

  function editTask(id) {
    setTask(prev => prev.map(item => item.id === id ? {...item, edited: !item.edited} : item));
    console.log('editTask')
  }

  function editTitle(id, titleChanges) {
    setTask(prev => prev.map(item => item.id === id ? {...item, title: titleChanges} : item));
    console.log('editTitle')
  }

  function completeTask(id) {
    setTask(prev => prev.map(item => item.id === id ? {...item, completed: !item.completed} : item));
    console.log('completeTask')
  }

  function deleteTask(id) {
    setTask(prev => prev.filter(item => item.id !== id));
    console.log('deleteTask')
  }

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
          <TodoItem completeTask={completeTask} deleteTask={deleteTask} editTask={editTask} key={item.id} id={item.id} title={item.title}/>
          : <TodoItemEdited editTask={editTask} editTitle={editTitle} key={item.id} id={item.id} title={item.title}/>
        )
      }
    </article>
  )
}