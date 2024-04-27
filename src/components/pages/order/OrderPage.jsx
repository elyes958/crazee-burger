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
       <Container/>
    </OrderPageStyled>
  )
}


const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  width: 100%;
  /* padding-top: 25px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;




// <h1>Bonjour {username}</h1>
// <Link to={"/login"}>
//     <button>Déconnexion</button>
// </Link>