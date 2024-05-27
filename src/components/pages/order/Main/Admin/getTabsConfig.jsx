
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

// tu peu egalement mettre tout les propriete de tes tab dans ce tableau d'objet et les afficher avec la methode map, c'est une maniere de refacto
export const getTabsConfig = (currentTabSelected) => [
  // {
  //   index: "chevronUpDown",
  //   label: "",
  //   Icon: isCollapsed ? <FiChevronUp/> : <FiChevronDown/>,
  //   onClick: () => setIsCollapsed(!isCollapsed),
  //   className: isCollapsed ? "is-active" : "",
  // },

  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus/>,
    // onClick: () => selectTab("add"),
    // className: currentTabSelected === "add" ? "is-active" : "",    // (currentTabSelected) on passe le state en parametre par rapport à ce genre de propriétes qui sont defini en fonction du state
  },

  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline/>,
    // onClick: () => selectTab("edit"),
    // className: currentTabSelected === "edit" ? "is-active" : "",
  }
]