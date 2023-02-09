import style from './todo-list.module.css';

export default function TodoList( {task, setTask} ) {

  function deleteTask(id) {
    let taskDeleted = [...task].filter(item => item.id !== id);
    setTask(taskDeleted);
  }

  function editTask(id) {
    let taskEdited = [...task].map( (item) => {
      if (item.id === id) {
        item.edited = !item.edited;
      }
      return item;
    });

    setTask(taskEdited);
  }

  function completeTask(id) {
    let taskCompleted = [...task].map( (item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTask(taskCompleted);
  }

  function editTitle(id, titleChanges) {
    let taskChanged = [...task].map( (item) => {
      if (item.id === id) {
        item.title = titleChanges;
      }
      return item;
    });

    setTask(taskChanged);
  }

  return(
    <article className={style.todo_list_article}>
      {
        task.map( function (item) {
          if(item.edited === false){
          return(
            <section className={style.todo_list_section} key={item.id}>
              <div className={style.todo_list_title__container}>
                <h2 className={style.todo_list_title}>{item.title}</h2>
              </div>
              <div className={style.todo_list_buttons}>
                <button className={style.todo_list_button} onClick={() => editTask(item.id)}>Edit</button>
                <button className={style.todo_list_button} onClick={() => deleteTask(item.id)}>Delete</button>
                <button className={style.todo_list_button} onClick={() => completeTask(item.id)}>Done / Undone</button>
              </div>
            </section>
          )} else {
            return(
              <section key={item.id}>
                <input className={style.todo_list_input__edit} type="text" value={item.title} onChange={ (event) => {editTitle(item.id, event.target.value)} }/>
                <button className={style.todo_list_button} onClick={() => editTask(item.id)}>Save</button>
              </section>
            )
          }
        })
      }
    </article>
  )
}