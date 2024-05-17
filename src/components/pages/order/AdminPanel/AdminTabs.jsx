import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import PanelContext from "../../../../context/PanelContext";



export default function AdminTabs() {
  // State
  const panelContext = useContext(PanelContext);


  // Comportements
  const handleClicked = () => {
    console.log("cliquer !");
    panelContext.setDisplayPanel(!panelContext.displayPanel);
  }
  
  // Affichage
  return (
    <AdminTabsStyled>
        <Tab svg={<FiChevronDown />} className="first" onClick={handleClicked} />
        <Tab texte={"Ajouter un produit"} svg={<AiOutlinePlus />} />
        <Tab texte={"Modifier un produit"} svg={<MdModeEditOutline />}/>
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  width: 100%;
  height: 44px;
  border: 1px solid green;
  .first{
    margin-left: 71px;
  }
`;
