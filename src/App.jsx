import { Post } from  './Post'
import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>

   <Header />
  
   
   <div className={styles.wrapper}></div>
   
   <Sidebar />
   <main>
  <Post 
  author= "Diego Fernandes"
  content= "Estou participando de curso"
  />
 <Post 
  author= "Raissa Marques"
  content= "Estou deteminada a aprende Reactjs"

  />

   </main>

    </div>
      
  )
}



