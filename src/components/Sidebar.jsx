import {  Pen, PencilLine } from "phosphor-react"
import styles from './Sidebar.module.css'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://github.com/ryanx3.png"/>

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/ryanx3.png" />
        <strong>
          Ryan Martins
        </strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>


    </aside>
  )
}