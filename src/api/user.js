import { doc, getDoc, setDoc } from "firebase/firestore";  // getDoc est le getter de firestore, dans la CRUD ça nous sert a read(recuperer les info dans une bdd), setDoc est le setter de firestore ont fait le reste du crud avec
import { db } from "./firebase-config";    // la reference à notre bdd qu'on importe ici
import { fakeMenu1, fakeMenu2 } from "../fakeData/fakeMenu";

// fct pour le getter de firestore -> getDoc
export const getUser = async (idUser) => { 
    const docRef = doc(db, "users", idUser); // 1er param la conexion à la bdd ici firestsore,2eme param le nom de la collection, et 3eme le nom de l'utilisateur (qu'on a appeler dans orderPage)

    const docSnapshot = await getDoc(docRef);    // getDoc nous return une promesse, ici on a pas attendu quel ce termine et on la stocker dans cet variable,voila pk quand on clg il y'a promise pending(promesse en cours/ en attente), on doit donc ajouter await devant pour attendre que la promesse ce termine et voir le resultat, attention await ne s'ecrit que dans une fct asynchrone, donc on doit rendre la fct qui contient l'instruction await asynchrone en utiliasant le mot async devant comme on a fait en haut
    console.log('docSnapshot: ', docSnapshot);    // de ce que j'ai vu dans la video il ça apparait 2 fois dans le clg à cause du ReactstrictMode (dans main.jsx)
    if (docSnapshot.exists()) { // exist et la methode dans l'objet que nous return la promesse qui permet de verifier si l'idUser dans notre fct ici existe dans la bdd, il nous return true ou false
        const userReceived = docSnapshot.data()
        console.log("userReceived: ", userReceived);
        return userReceived; // atention avant je n'avais pas mis ça du coup la fct ne retourner rien et il n'y avais jamais rien dans ma variavle existingUser dans loginForm
    } // sinon il return rien, rien = undefined à ne pas confondre avec null qui est = ça n'existe meme pas
}
// ligne 7 quand tu survole getDoc , celui ci nous return un "Documentsnapshot" qui est une photographie de la bdd au moment ou il a fini d'executer la promesse


// Rappel promesse javascript: Quand une fonction retourne une promesse(un "pari" voir explication video f13 video 4a) cette promesse ne peut avoir que 3 valeurs possibles :
// 1er cas : promesse en cours d'achèvement => Promise (pending)
// 2e cas : résultat positif de la promesse achevée => résultat positif (fulfilled)
// 3e cas : résultat de la promesse achevée => résultat négatif (rejected)


// fct pour le setter de firestore -> setDoc
export const createUser = (userId) => {
    // CACHETTE
    const docRef = doc(db, "users", userId) // quand je vais cree mon utilisateur je veux le ranger ou? dans la bdd premier param db, dans la collection users 2 eme param et enfin 3 eme param le nom de l'utilisateur userId

    // NOURRITURE    (dans firestore un document est un element au format JSON en gros un objet) cet objet va avoir 2 valeur comme dans notre collection cree dans firebase, un username(qui aura pour valeur le userID rentrer par l'utilisateur au moment de la conexion à notre site) et un menu
    const newDoc = {
        username: userId,
        menu: fakeMenu2,   // quand on cree un new utilisateur le menu de base est toujour le meme
    }

    // setDoc(CACHETTE, NOURRITURE) ce sont les 2 param que prend setDoc, explication de la video comme ci ct une taupe qui cherche un chemin(dans la bdd) et y place sa nouritture. la cachette c'est tout simplement docRef
    setDoc(docRef, newDoc); // setDoc nous return une promesse mais c'est seulment pour verifier si ça c'est bien executer cotés front-end, on peu le verfier directement dans la collection sur firebase si ça a bien été ajouter
}



export const authenticateUser = async (userId) => { 
     // 1. récupère un existingUser
     const existingUser = await getUser(userId); // getUser est une promesse il va donc mettre du temp à s'executer
     console.log("existingUser: ", existingUser);

     // 2. sinon tu créé un newUser
     if (!existingUser){
        createUser(userId);   // fct setter de firestore sur firebase voir(user.js)
     }
}
