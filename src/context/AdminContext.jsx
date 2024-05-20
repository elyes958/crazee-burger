import { createContext } from "react";


export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {}
});
// createContext est une fct de la librairie React qui va prendre en parametre un objet et dans cet objet on aura un certain nombre de propriete qu'on voudra partager sur tt le reste de notre application