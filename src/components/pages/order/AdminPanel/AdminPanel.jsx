import { useContext } from "react";
import styled from "styled-components";
import PanelContext from "../../../../context/PanelContext";
import selectTabContext from "../../../../context/selectTabContext";

export default function AdminPanel() {
  // State
  const panelContext = useContext(PanelContext);
  const selectedTabContext = useContext(selectTabContext);

  if(!panelContext.displayPanel){
    return (
      <AdminPanelStyled>
          {selectedTabContext.selectedTab === 1  ? <p>Ajouter un produit</p> : <p>Modifier un produit</p> }
      </AdminPanelStyled>
    )
  } else {
    return null;
  }
}

const AdminPanelStyled = styled.div`
  width: 100%;
  height: 251px;
  /* border: 1px solid blue; */
  background: white;
  padding-top: 17px;
  p{
    margin-top: 0px;              // attention au marge debase des balise comme la p qui me cree un décalage
    margin-left: 21px;
  }
`;
