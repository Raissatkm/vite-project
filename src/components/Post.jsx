import styles from './Post.module.css';


export function Post() {
    return (
    <article className={styles.post}>
     <header>
        <div className={styles.author}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/98561479?v=4.png" />
        <div className={styles.authorInfo}>
            <strong>Raissa Marques</strong>
            <span>Web Developer</span>
            </div>
         </div>
         <time title="27 de abril as 17:33" dateTime="2023-04-27  17:36:40" >Publicado há 1h</time>
         <div className={styles.content}>
            <p>Fala galera</p>
            <p>Acabei de subir um projeto no meu portifa. É um projeto que fiz na nlw return, evento da Rocketseat.</p>
            <p><a href="">#novoprojeto #nlw #rocketseat </a></p>
           
         </div>
        <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
         placeholder="Deixe seu comentário" 
       />
      <footer>
        <button type="submit">Publicar</button>
    
        </footer>  
        </form>
     </header>
    </article>
    )
}