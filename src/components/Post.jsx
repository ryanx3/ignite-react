import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/ryanx3.png" />

          <div className={styles.authorInfo}>
            <strong>Ryan Martins</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="11 de maio as 08:15h" dateTime="2022-05-11 08:05:38">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa</p>
        <p>
          Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz
          no NLW Return, evento{" "}
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#novoprojeto</a>{" "}
          <a href="#">#novoprojeto</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu comentário</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
