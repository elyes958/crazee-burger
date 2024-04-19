import { useState } from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

function LoginPage(params) {
    //affichage (render)
    return (
        <LoginPageStyled>
            <Logo/>
            <LoginForm/>
        </LoginPageStyled>
    )
}
// LoginForm semantiquement il signifie quelque chose c'est plus clair et plus propre de procéder comme ça(en decomposant en composant comme on a fait la)
export default LoginPage;


const LoginPageStyled = styled.div`       
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before{
    content: "";
    background: url("/images/burger-and-fries-background.jpg")rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;



// pour l'image il faut utiliser le pseudo class ::before, qui permet d'ajouter un element avant et après un certain element défini, pour que cet élement apparaissent il faut ajouter la propriete content à l'intérieur
// si ont aurai mis ::after ça aurait etait après l'element, css faut rechercher sur googl ne pas chercher à retenir par coeur c'est une perte de temps, c'est avec la pratique que ça rentre
// comme ont met position absolute et 0 partout + le z-index notre content va passer sous l'element, si ont met 1 dans le z-index il va passer sur notre element(qui va donc ce retrouver en dessous)
// background-blend-mode: darken; nous permet de mettre l'opacité de l'image un peu comme sur la maquette en "sombre", + il faut rajouter le rgba(0, 0, 0, 0.7) sur le background-img n'oublie pas