import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { theme } from '../../../theme';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Admin from './AdminPanel/Admin';
import AdminContext from '../../../context/AdminContext';


export default function OrderPage() {
  //state
  // const {username} = useParams();
  // la variable parametres contient un objet car useParams nous retourne un objet(la valeur des parametre qu'on a passer dans l'url via le : est la cle qui contient notre valeur)
  // console.log("username: ", username);
  // quand ont console.log en mettant dans une variable comme on a fait avant on voit que notre valeur ce trouver dans la cle username de l'objet
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  //comportements

  //value du context
  const adminValue = {
    isModeAdmin: isModeAdmin,
    setIsModeAdmin: setIsModeAdmin
  }

  //affichage
  return (
    <AdminContext.Provider value={adminValue}>
    <OrderPageStyled>
       <div className='container'>
          <Navbar />
          <Main/>
          {/* <Admin/> */}
       </div>
    </OrderPageStyled>
    </AdminContext.Provider>
  )
}
// ligne 32 le composant Admin que j'avais fait moi avant la correction
// Le dossier AdminPanel et ce qu'il y'a dedans c'est tout ce que j'ai fait moi, le dossier Admin c'est la correction


const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  /* padding-top: 25px; */
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  .container{
  /* background: red; */
  height: 95vh;
  width: 1400px;
  display: flex;
  flex-direction: column;
  border-radius: ${theme.borderRadius.extraRound};
  }
`;




// <h1>Bonjour {username}</h1>
// <Link to={"/login"}>
//     <button>Déconnexion</button>
// </Link>