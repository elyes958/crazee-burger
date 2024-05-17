import { useContext } from "react";
import styled from "styled-components";
import PanelContext from "../../../../context/PanelContext";

export default function AdminPanel() {
  // State
  const panelContext = useContext(PanelContext);

  if(!panelContext.displayPanel){
    return (
      <AdminPanelStyled>
          <p>Ajouter un produit</p>
      </AdminPanelStyled>
    )
  } else {
    return null;
  }
}

const AdminPanelStyled = styled.div`
  width: 100%;
  height: 251px;
  border: 1px solid blue;
  background: white;
  p{
    margin-top: 17px;
    margin-left: 21px;
  }
`;
