import style from './title.module.css';

export default function Title() {
  return(
    <header className={style.title}>
      <h1 className={style.title_title}>Simple to-do SPA</h1>
    </header>
  )
}