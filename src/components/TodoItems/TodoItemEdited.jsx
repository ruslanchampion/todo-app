import style from '../TodoList/TodoList.module.css';

export default function TodoItem({editTask, editTitle, id, title}) {
  return(
    <section key={id}>
      <input className={style.input__edit} type="text" value={title} onChange={ (event) => {editTitle(id, event.target.value)} }/>
      <button className={style.button} onClick={() => editTask(id)}>Save</button>
    </section>
  )
}