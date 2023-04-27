import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.Sidebar}>

        <img 
        className={styles.cover}
         src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50" />
         

        <div className='{styles.profile}'>


        <img  className={styles.avatar} src="https://avatars.githubusercontent.com/u/98561479?v=4.png"/>
        <strong>Raissa Marques</strong>
        <div>
        <span>Web Developer</span>
        </div>

        
        </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    );
}