import  styles from './Header.module.css'

import ignitesimbol from '../assets/ignitesimbol.svg';

console.log(ignitesimbol)

export function Header() {
    return (
        <header className={styles.header}>
          <img src= {ignitesimbol} alt="Logotipo do Ignite" />
    
        </header>
    );
}