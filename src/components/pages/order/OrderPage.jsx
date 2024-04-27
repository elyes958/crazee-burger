import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import { theme } from '../../../theme';
import Container from './Container';

export default function OrderPage() {
  //state
  const {username} = useParams();
  // la variable parametres contient un objet car useParams nous retourne un objet(la valeur des parametre qu'on a passer dans l'url via le : est la cle qui contient notre valeur)
  // console.log("username: ", username);
  // quand ont console.log en mettant dans une variable comme on a fait avant on voit que notre valeur ce trouver dans la cle username de l'objet

  //comportements

  //affichage
  return (
    <OrderPageStyled>
       <div className='container'>
          <div className='navbar'>
              Navbar
              <h1>Bonjour {username}</h1>
            <Link to="/">
              <button>Deconnexion</button>
            </Link>
          </div>
          <div className="main">
            Main
          </div>
       </div>
    </OrderPageStyled>
  )
}


const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  /* padding-top: 25px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .container{
  background: red;
  height: 95vh;
  width: 1400px;
  display: flex;
  flex-direction: column;

  .navbar{
    background: blue;
    height: 10vh;
  }
  .main{
    background: green;
    /* height: calc(95vh - 10vh);  ont peu egalement faire ce qu'on a fait ligne 58 comme ça, mais la 2eme methode avec flex:1 parai plus simple*/ 
    flex: 1;  // quand on utilise flexbox cela permet de dire à l'element de prendre toute la place restante (ici dans notre container du coup notre main va bien j'usqu'a en bas)
  }
  }
`;




// <h1>Bonjour {username}</h1>
// <Link to={"/login"}>
//     <button>Déconnexion</button>
// </Link>