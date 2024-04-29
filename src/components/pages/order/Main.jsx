import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return (
    <MainStyled>
    </MainStyled>
  )
}

const MainStyled = styled.main`
    background: ${theme.colors.background_white};
    /* height: calc(95vh - 10vh);  ont peu egalement faire ce qu'on a fait ligne 58 comme ça, mais la 2eme methode avec flex:1 parai plus simple*/ 
    flex: 1;  // quand on utilise flexbox cela permet de dire à l'element de prendre toute la place restante (ici dans notre container du coup notre main va bien j'usqu'a en bas)
    border-bottom-left-radius: ${theme.borderRadius.extraRound};  // uniquement le coin en bas à gauche
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    // ont aurait pu egalement juste coller le border radius du ticket 0 0 15 15 = en bas a droite et a gauche pour les 2 15px
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
`;
