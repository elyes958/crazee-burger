import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";

export default function AdminPanel() {
  const {isAddSelected,  isEditSelected } = useContext(AdminContext);


  return (
    <AdminPanelStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
