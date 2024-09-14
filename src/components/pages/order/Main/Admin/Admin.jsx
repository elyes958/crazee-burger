import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext, useState } from "react";
import AdminContext from "../../../../../context/AdminContext";
import { fadeInFromBottom } from "../../../../../theme/animations";

export default function Admin() {
  //state
  const { isCollapsed, } = useContext(AdminContext);



  return (
    <AdminStyled>
        <AdminTabs 
         />
        {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
    // ces 4 propriete en dessous permette de prendre tout l'espace disponible de gauche à droite et de haut en bas
    position: absolute;
    // la position absolute d'un élement il va sortir du flow de tous les elements parents, et il va avoir en référent le premier element parent qu'il rencontre qui a la position relative si il y'en a pas alors par default c'est l'ecran. nous on veut que le premier element parent qui a la position relative soit : div className="menu-and-admin" 
    z-index: 2;  // on lui met 2 comme ça les croix du delete button passe bien en dessous de admin panel et des tabs
    bottom: 0;
    left: 0;
    right: 0;
    
    animation: ${fadeInFromBottom} ease-out ${theme.animations.speed.slow}
`;
// ease-in  = ralentit au debut et accelere
// ease-out = comment directe avec la vitesse de base puis arrivé à la fin il va ce calmer(ralentir, remplace le mot ease par ralentir, in = au debut, out = à la fin)
// si on veut les 2 on a ease-in-out, ease tout seul a quasiment le meme comportement que ease-in-out
