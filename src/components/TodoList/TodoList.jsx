import style from './todo-list.module.css';

export default function TodoList( {task, setTask} ) {

  function deleteTask(id) {
    let taskDeleted = [...task].filter(item => item.id !== id);
    //нагло забрал решение, фу таким быть
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
 <TodoList>
   {task.map(todo => <Todo onHandleDelete={onHandleDelete} />)}
 </TodoList>
  return(
    <article className={style.todo_list_article}>
      {
        task.map((item) => {
          if(item.edited === false){
          return(
            <section className={style.todo_list_section} key={item.id}>
              <div className={style.todo_list_title__container}>
                <h2 className={style.todo_list_title}>{item.title}</h2>
              </div>
              <div className={style.todo_list_buttons}>
                <button className={style.todo_list_button} onClick={() => editTask(item.id)}>Edit</button>
                {/* <button onClick={editTask(item.id)}>Edit</button> если объявить не внутри функции, то не работает*/}
                <button className={style.todo_list_button} onClick={() => deleteTask(item.id)}>Delete</button>
                {/*Почему если сверху функцию объявишь без скобок
                она будет постоянно выполняться. Если объявишь со скобками
                но не внутри функции - опять же будет 
                бесконечно выполняться???????????*/}
                {/*Из функции map нужно возвращать значения..., т.к. если не вернуть,
                то состояние task станет undefined и ломается все приложение*/}
                <button className={style.todo_list_button} onClick={() => completeTask(item.id)}>Done / Undone</button>
              </div>
            </section>
          )} else {
            return(
              <section key={item.id}>
                {/* <input type="text" value={item.title} onChange={ (event) => {setEdit(event.target.value)} }/>Вот такой сетер рушит все нахер при вводе */}
                <input className={style.todo_list_input__edit} type="text" value={item.title} onChange={ (event) => {editTitle(item.id, event.target.value)} }/>{/*вопрос №2*/}
                {/* <div>{item.title}</div> */}
                {/* <button onClick={() => saveTask(item.id)}>Save</button> */}
                <button className={style.todo_list_button} onClick={() => editTask(item.id)}>Save</button>
              </section>
            )
          }
        })
      }
    </article>
  )
}
