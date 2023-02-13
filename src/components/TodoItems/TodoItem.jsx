import style from '../TodoList/TodoList.module.css';

export default function TodoItem({id, title, editTask, deleteTask, completeTask}) {
  
  return(
    <section className={style.section} key={id}>
      <div className={style.title__container}>
        <h2 className={style.title}>{title}</h2>
      </div>
      <div className={style.buttons}>
        <button className={style.button} onClick={() => editTask(id)}>Edit</button>
        <button className={style.button} onClick={() => deleteTask(id)}>Delete</button>
        <button className={style.button} onClick={() => completeTask(id)}>Done / Undone</button>
      </div>
    </section>
  )
}