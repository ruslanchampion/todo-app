import Button from '../UI/button/Button.jsx';
import Input from '../UI/input/Input.jsx';
import style from './TodoItem.module.css';

export default function TodoItem({editTask, editTitle, id, title}) {
  
  return(
    <section className={style.section}>
      <Input type="text" value={title} onChange={ (event) => {editTitle(id, event.target.value)} }/>
      <Button onClick={() => editTask(id)}>Save</Button>
    </section>
  )
}