import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminPanel() {
  const {isAddSelected,  isEditSelected, currentTabSelected } = useContext(AdminContext);

  const tabs        = getTabsConfig(currentTabSelected);
  const tabSelected = tabs.find((tab) => tab.index === currentTabSelected);


  return (
    <AdminPanelStyled>
      {currentTabSelected === tabSelected.index && tabSelected.label}
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
