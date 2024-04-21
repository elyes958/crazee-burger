import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

export default function Logo() {
  return (
        <LogoStyled>
            <h1>CRAZEE</h1>
            <img src="images/logo-orange.png" alt="logo" />
            <h1>BURGER</h1>
        </LogoStyled>
  )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    transform: scale(2.5);

    h1{
        display: inline;
        text-align: center;
        color: #ffa01b;
        font-size: 36px;
        line-height: 1em;
        font-weight: 700;
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


