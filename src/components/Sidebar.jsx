import { Pen, PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://github.com/ryanx3.png" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/ryanx3.png"/>
        <strong>Ryan Martins</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
