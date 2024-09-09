import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothMenus = (userId, menuUpdated) => { // menuUpdated = le menu mis à jour après avoir ajouter un element
    const cachette = doc(db, "users", userId)

    const nourriture = {
      username: userId,
      menu: menuUpdated
    }
    setDoc(cachette, nourriture)
}


export const getMenu = async (idUser) => { 
    const docRef = doc(db, "users", idUser);

    const docSnapshot = await getDoc(docRef);    
    console.log('docSnapshot: ', docSnapshot);    
    if (docSnapshot.exists()) { 
        const { menu } = docSnapshot.data(); // nous renvoi un objet avec les data dans firestore donc on peu destructurer pour recuperer ce qui nous interesse à savoir menu
        console.log("menu: ", menu);
        return menu; 
    } 
}


export const BASKET_MESSAGE = { 
    EMPTY: "Votre commande est vide.",
    LOADING: "Chargement en cours",
}