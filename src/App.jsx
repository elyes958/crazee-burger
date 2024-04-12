import { useState } from "react";
import LoginPage from "./components/pages/login/LoginPage";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ErrorPage from "./components/pages/error/ErrorPage";
import OrderPage from "./components/pages/order/OrderPage";

function App () {
  // state

  // comportements

  // affichage(render)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="order/:username" element={<OrderPage />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  // Route path="/" quand ont met ça dans route c'est la page par default de l'application donc rien après le /
  // <Route path="*" *= si l'utilisteur nous rentre n'importe quoi un chemin qui n'existe pas
  //avec create-react-app browser router est mis dans index.js pour englober app la bas, or moi la j'ai utiliser Vite et je l'ai mis la et ça a fonctionner(j'ai suivi la doc sur le site react-router)
}

export default App
