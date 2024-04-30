import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import logo from "../../../public/images/logo-orange.png";

export default function Logo( {className, onClick} ) {
  return (
        <LogoStyled className={className} onClick={onClick}>
            <h1>CRAZEE</h1>
            {/* <img src="images/logo-orange.png" alt="logo" /> */}
            <img src={logo} alt="logo" />    
            <h1>BURGER</h1>
        </LogoStyled>
  )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    /* transform: scale(2.5); ça ct la taille qu'on avait mis pour le gros logo de loginPage mais ce n'est pas la taille par default car dans toutes les autres pages le logo est petit*/

    h1{
        display: inline;
        text-align: center;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.P4};
        line-height: 1em;
        font-weight: ${theme.fonts.weights.bold};
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: "Amatic SC", cursive;
    }

    img{
        object-fit: contain;
        object-position: center;
        height: 60px;
        width: 80px; // for safari and firefox
        margin: 0 5px;
    }

    // ça c'est ce que j'avais fait moi
    /* color: ${"theme.colors.primary_burger"};
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px;
    img{
        width: 200px;
        height: 150px;
    }
    span{
        font-size: 110px;
        margin: 0px;
        padding: 0px;
        color: ${"theme.colors.primary_burger"};
    } */
`;
// ligne 9 au niveau des images, soit tu y accede directement comme ça sans remonter les dossier avec les ./ soit tu y accede en important l'image en haut avec par exemple import logo from et la tu met le chemin avec les ./ 2 methode au choix la premiere me semble plus simple
// ligne 7 className= est un className de html(ici jsx) la props est à l'interieur, contrairement au composant parent qui a une props qu'ont a appeler className car les composant prenne des props et pas du html/jsx
// ligne 11, je ne sais pas pourquoi mais en important le logo comme ça cela fonctionne je n'est plus l'erreur avec le logo qui n'apparaissais pas avec le img src de la ligne prececente
// ligne 8, window.location.reload() fct qui permet de recharger la page , du coup ont a fait remonter ce comportement dans le parent via les props pour que celui ci ne vise que le logo de la page order et pas celui sur la page login