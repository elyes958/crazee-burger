import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";
import { getTabsConfig } from "./getTabsConfig";
import AjoutProduit from "./AjoutProduit";

export default function AdminPanel() {
  const {isAddSelected,  isEditSelected, currentTabSelected } = useContext(AdminContext);

  const tabs        = getTabsConfig(currentTabSelected);
  const tabSelected = tabs.find((tab) => tab.index === currentTabSelected);
  // La méthode find va parcourir le tableau tabs et retourner le premier objet dont la propriété index est égale à la valeur de currentTabSelected. 

  return (
    <AdminPanelStyled>
      {/* {currentTabSelected === tabSelected.index && tabSelected.label} */}
      {currentTabSelected === "add" && <AjoutProduit/>}
      {/* {currentTabSelected === "add" && "Ajouter un produit"}
      {currentTabSelected === "edit" && "Modifier un produit"} */}
    </AdminPanelStyled>
  )
}
// ligne 16, 10, 11 refacto des 2 ligne en comentaires


const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;



// ligne 13 explication plus détaillés: 
// tabs :
// C'est un tableau d'objets. Chaque objet représente un onglet avec des propriétés telles que index, label, et Icon.
// find Méthode :
// La méthode find est utilisée pour parcourir le tableau tabs.
// Elle accepte une fonction de rappel (callback function) qui est appelée pour chaque élément du tableau.
// Fonction de Rappel (tab) => tab.index === currentTabSelected :
// La fonction de rappel prend chaque élément (ici nommé tab) du tableau tabs.
// Elle compare la propriété index de tab avec la valeur de currentTabSelected.
// Si tab.index est égal à currentTabSelected, la fonction retourne true.
// Retour de find :
// La méthode find retourne le premier élément pour lequel la fonction de rappel retourne true.
// Si aucun élément ne satisfait la condition, find retourne undefined.