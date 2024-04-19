import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import logoImg from '../../assets/F03 logo-orange.png';

export default function Logo() {
  return (
        <LogoStyled><span>CRAZEE</span><img src={logoImg} alt="logo" /><span>BURGER</span></LogoStyled>
  )
}

const LogoStyled = styled.h1`
    color: ${theme.colors.primary_burger};
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
        color: ${theme.colors.primary_burger};
    }
`;


