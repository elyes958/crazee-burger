import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// ligne 6, à partir de cet id root il va cree une arborescence(un arbre de composant) qu'il va afficher(.render) le premier composant afficher est App 
// clique droit atteindre la definition sur un composant exemple: App, ouvre le fichier du composant, ou maintenir ctrl + clik encore plus simple