import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/window";

const initialiseMenu = async (username, setMenu) => {
    const menuReceived = await getMenu(username); // on met async et await pour attendre que la promesse ce termine est avoir un resultat negatif ou positif et non une promesse en cours(voir la fct getMenu pour comprendre)
    console.log("menuReceived: ", menuReceived);
    setMenu(menuReceived);
}

const initialiseBasket = (username, setBasket) => {
    const basketReceived = getLocalStorage(username); // localStorage est synchrone, pas besoin de "await".
    // console.log("basketReceived: ", basketReceived);
    if (basketReceived) setBasket(basketReceived); // localStorage va garder en memoir le basket de lutilisateur du coup quand on ce co il va initialiser le basket avec les donne du basket dans le localStorage de l'utilisateur
    // if(basketReceived) = si basketReceived existe et est different de null et undefined
}

export const initialiseUserSession = async (username, setMenu, setBasket) => { 
    await initialiseMenu(username, setMenu);  // on attend que initialiseMenu ce termine avant d'executer initialiseBasket
    initialiseBasket(username, setBasket);
}
