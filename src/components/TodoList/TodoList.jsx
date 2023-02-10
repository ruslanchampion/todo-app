import style from './TodoList.module.css';

export default function TodoList( {task, setTask} ) {

  function deleteTask(id) {
    setTask(prev => [...prev].filter(item => item.id !== id));
  }

  function editTask(id) {
    // setTask(prev => prev.map(item => item.id === id ? {...item, edited: !item.edited} : {...item}));
    setTask(prev => prev.map(item => item.id === id ? {...item, edited: !item.edited} : item));//раотает так же как и сверху
    // setTask(prev => prev.map(item => item.id === id ? !item.edited : item));//не работает т.к. все поля объекта кроме 'edited' пропадают??
    console.log(task)
  }

  function completeTask(id) {
    setTask(prev => prev.map(item => item.id === id ? {...item, completed: !item.completed} : item));
  }

  function editTitle(id, titleChanges) {
    setTask(prev => prev.map(item => item.id === id ? {...item, title: titleChanges} : item));
  }

  return(
    <article className={style.article}>
      {
        task.map( function (item) {
          if(item.edited === false){
          return(
            <section className={style.section} key={item.id}>
              <div className={style.title__container}>
                <h2 className={style.title}>{item.title}</h2>
              </div>
              <div className={style.buttons}>
                <button className={style.button} onClick={() => editTask(item.id)}>Edit</button>
                <button className={style.button} onClick={() => deleteTask(item.id)}>Delete</button>
                <button className={style.button} onClick={() => completeTask(item.id)}>Done / Undone</button>
              </div>
            </section>
          )} else {
            return(
              <section key={item.id}>
                <input className={style.input__edit} type="text" value={item.title} onChange={ (event) => {editTitle(item.id, event.target.value)} }/>
                <button className={style.button} onClick={() => editTask(item.id)}>Save</button>
              </section>
            )
          }
        })
      }
    </article>
  )
}