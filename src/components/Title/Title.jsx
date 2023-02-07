import style from './title.module.css';

export default function Title() {
  return(
    <header className={style.title}>
      <h1 className={style.title_title}>To-do list do by myself after watching a video:</h1>
      <a className={style.title_link} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Click on me</a>
      <br/>
      <a className={style.title_link} href="https://www.youtube.com/watch?v=RjYCZcxVkto" target="_blank">Click on me</a>
    </header>
  )
}