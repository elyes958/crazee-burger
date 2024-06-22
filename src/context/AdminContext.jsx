import { createContext } from "react";


export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    isEditSelected: false,
    setIsEditSelected: () => {},

    isAddSelected: false,
    setIsAddSelected: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},
    

    menu: [],
    // setMenu: () => {},
    handleAdd: () => {},
    handleDelete:() => {},
    resetMenu: () => {},

    newProduct: [],
    setNewProduct:() => {},

    idEditCard: null,
    setIdEditCard: () => {},

    handleModify: () => {},
});
// createContext est une fct de la librairie React qui va prendre en parametre un objet et dans cet objet on aura un certain nombre de propriete qu'on voudra partager sur tt le reste de notre application
// pas besoin de cree plusieurs fichier context tu peu tous les mettre dans le meme comme on a fait la avec tous nos state