import styles from './Sidebar.module.css'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://github.com/ryanx3.png"/>

      <div className={styles.profile}>
        <strong>
          Ryan Martins
        </strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href=''>
          Editar seu perfil
        </a>
      </footer>


    </aside>
  )
}