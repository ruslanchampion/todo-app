import Button from '../UI/button/Button.jsx';
import Input from '../UI/input/Input.jsx';
import style from './TodoItem.module.css';

export default function TodoItem({editModeTodo, editTodoTitle, id, title}) {
  
  return(
    <section className={style.section}>
      <Input type="text" value={title} onChange={ (e) => {editTodoTitle(id, e.target.value)} }/>
      <Button onClick={() => editModeTodo(id)}>Save</Button>
    </section>
  )
}