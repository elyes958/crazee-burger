import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothMenus = (userId, menuUpdated) => { // menuUpdated = le menu mis à jour après avoir ajouter un element
    const cachette = doc(db, "users", userId)

    const nourriture = {
      username: userId,
      menu: menuUpdated
    }
    setDoc(cachette, nourriture)
}