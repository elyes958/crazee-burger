import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme/index.jsx";
import { AiOutlinePlus } from "react-icons/ai";


export default function AdminTabs({isCollapsed ,setIsCollapsed}) {

  return (
    <AdminTabsStyled>
        <Tab label="" Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>} onClick={() => setIsCollapsed(!isCollapsed)} className={isCollapsed ? "is-active" : ""} />
        <Tab label="Ajouter un produit" Icon={<AiOutlinePlus/>} onClick={() => setIsCollapsed(!isCollapsed)} className={isCollapsed ? "is-active" : ""} />
    </AdminTabsStyled>
  )
}
// dans le className on ne peu pas simplifier la ternaire avec &, car il attend forcement une string pas de undefined ou de null, donc obliger d'ecrire ou une chaine vide ""

const AdminTabsStyled = styled.button`
  /* border: 1px solid red; */
  display: flex;
  padding: 0 20px;

  .is-active{
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  //TAB est un button, donc pour tout les button on ajoute l'espace de 1px pour respecter la maquette figma et l'ecart de 1px entre les composants
  button{
    margin-left: 1px;
  }
`;
