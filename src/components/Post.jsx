import styles from './Post.module.css'

export function Post(props) {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <img className={styles.avatar} 
          src="https://github.com/ryanx3.png"
          />

          <div className={styles.authorInfo}>

          </div>
        </div>

        <time
         title='11 de maio as 08:15h' dateTime='2022-05-11 08:05:38'>
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa</p>
        <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento </p>
        <p><a href="#">jane.design/doctorcare</a></p>
        <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}