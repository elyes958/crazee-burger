// pareil un autre custom hooks pour extraire de la logique et du state de notre composant qui devener beaucoup trop charger
// Dans ce custom hook on a extrait la logique qui concerne le crud

import { useState } from "react";
import { fakeMenu2 } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { syncBothMenus } from "../api/product";

export const useMenu = () => {
    const [menu, setMenu] = useState(fakeMenu2);



    //comportements (gestionnaire de state ou "state handlers")
    // oublie pas un comportement qui modifie un state doit etre defini proche de ce state(bonne pratique), la seul exception c'est quand ont a des state assez simple comme un booleen, ou juste une string mais pas sur des state complexe avec array objet
    const handleAdd = (newProduct, username) => {  // double clique sur handleAdd(ou n'importe quel fct) + ctrl shift F pour voir ou on l'utilise dans le projet
        // Copie du tableau
        const menuCopy = [...menu]
        // manip de la copie du tableau
        const menuUpdated = [newProduct, ...menuCopy]
        // update du state
        setMenu(menuUpdated);
        syncBothMenus(username, menuUpdated)
    }

    const handleDelete = (idOfProductToDelete, username) => {
        // Copie du tableau(je laisse l'ancienne facon de faire mais il faut utiliser la methode ligne 57 à partir de maintenant)
        const copy = [...menu];

        // manip de la copie du tableau
        const filterProducts = copy.filter((product) => product.id !== idOfProductToDelete);
        console.log("filterProducts: ", filterProducts);

        // update du state
        setMenu(filterProducts);   // ce comportement doit etre defini proche du state qu'il est en train de modifier
        syncBothMenus(username, filterProducts);
    }

    const handleEdit = (productBeingEdited) => {
        console.log("productBeingEdited: ", productBeingEdited);
        // Copie du state(deep clone) avec la methode JSON qui est bien mieux(voir explication F09 live 1 si tu te rapel plus pk)
        const menuCopy = deepClone(menu);

        // manip de la copie du state
        const indexOfProductToEdit = menu.findIndex((product) => product.id === productBeingEdited.id);
        console.log("indexOfProductToEdit: ", indexOfProductToEdit);

        menuCopy[indexOfProductToEdit] = productBeingEdited;

        // update du state
        setMenu(menuCopy);
    }

    // Ce que j'ai fait moi
    // const handleModify = (id, editCard) => { 
    //   const copy = [...menu];

    //   const modify     = copy.filter((card) => card.id !== id);
    //   const menuModify = [editCard, ...modify];

    //   setMenu(menuModify);
    // }

    const resetMenu = () => { // ont envoie le comportement dans le context pour eviter d'envoyer le settter qui lui doit rester dans le composant dans lequel il est defini(bonne pratique)
        setMenu(fakeMenu2);
    }

    // const handleModify = (idOfProductToModify, newTitle, newImageSource, newPrice) => {
    //   const copy = [...menu];



    // }


   return {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu}
}