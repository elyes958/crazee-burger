import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme/index.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext, useState } from "react";
import AdminContext from "../../../../../context/AdminContext.jsx";
import { MdModeEditOutline } from "react-icons/md";


export default function AdminTabs() {
  // state
  const {isAddSelected, setIsAddSelected, isCollapsed, setIsCollapsed, isEditSelected, setIsEditSelected, } = useContext(AdminContext);

  // Comportement
  // const selectAddTab = () => {
  //   setIsCollapsed(false);
  //   setIsAddSelected(true);
  //   setIsEditSelected(false);
  // };

  // const selectEditTab = () => {
  //   setIsCollapsed(false);
  //   setIsEditSelected(true);
  //   setIsAddSelected(false);
  // };

  //refacto du code plus haut
  const selectTab = (tabSelected) => { 
    setIsCollapsed(false);

    if(tabSelected === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
    }
    
    if(tabSelected === "edit") {
      setIsEditSelected(true);
      setIsAddSelected(false);
    }
  }

  // tu peu egalement mettre tout les propriete de tes tab dans ce tableau d'objet et les afficher avec la methode map, c'est une maniere de refacto
  const tabsConfig = [
    {
      label: "",
      Icon: isCollapsed ? <FiChevronUp/> : <FiChevronDown/>,
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : "",
    },

    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus/>,
      onClick: () => selectTab("add"),
      className: isAddSelected ? "is-active" : "",
    },

    {
      label: "Modifier un produit",
      Icon: <MdModeEditOutline/>,
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : "",
    }
  ]

  return (
    <AdminTabsStyled>
        {/* <Tab label="" Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>} onClick={() => setIsCollapsed(!isCollapsed)} className={isCollapsed ? "is-active" : ""} />
        <Tab label="Ajouter un produit" Icon={<AiOutlinePlus/>} onClick={() => selectTab("add")} className={isAddSelected ? "is-active" : ""} />
        <Tab label="Modifier un produit" Icon={<MdModeEditOutline/>} onClick={() => selectTab("edit")} className={isEditSelected ? "is-active" : ""} /> */}
        {tabsConfig.map((tab) => {
          return (
          <Tab label={tab.label} Icon={tab.Icon} onClick={tab.onClick} className={tab.className}/>
          )
        })}
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
