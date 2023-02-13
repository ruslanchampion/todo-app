import useTask from '../hooks/useTask.js';

import style from '../TodoList/TodoList.module.css';

export default function TodoItem({id, title}) {
  
  let {editTask, editTitle} = useTask();
  
  // let editTitle= useTask();
  // let editTask = useTask();
  

  return(
    <section key={id}>
      <input className={style.input__edit} type="text" value={title} onChange={ (event) => {editTitle(id, event.target.value)} }/>
      <button className={style.button} onClick={() => editTask(id)}>Save</button>
    </section>
  )
}