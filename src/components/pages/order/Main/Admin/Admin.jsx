import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Admin() {
  return (
    <AdminStyled>Admin</AdminStyled>
  )
}

const AdminStyled = styled.div`
    height: 250px;
    // ces 4 propriete en dessous permette de prendre tout l'espace disponible de gauche à droite et de haut en bas
    position: absolute;
    // la position absolute d'un élement il va sortir du flow de tous les elements parents, et il va avoir en référent le premier element parent qu'il rencontre qui a la position relative si il y'en a pas alors par default c'est l'ecran. nous on veut que le premier element parent qui a la position relative soit : div className="menu-and-admin" 
    bottom: 0;
    left: 0;
    right: 0;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
`;