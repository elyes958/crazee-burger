import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext, useState } from "react";
import AdminContext from "../../../../../context/AdminContext";

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
    
`;