// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // pour se connecter à notre compte firebase
export const db  = getFirestore(app);      // pour se connecter à notre BDD Firestore, db = database
// le produit qu'on a ajouter dans notre projet firebase est Firestore il faut donc avoir une reference vers celui-ci, pour faire cela on va utiliser la methode getFirestore qui prend en param app la conexion à firebase
// et qui nous retourne une reference à la bdd firestore




// F13 - le bug "Unhandled promise rejection: FirebaseError: Quota exceeded."
// Unhandled promise rejection: FirebaseError: Quota exceeded.
// Si vous voyez cette erreur, c'est parce que vous avez effectué plus de 50 appels pour la journée : plus d'info de la doc ici sur les Quotas : https://firebase.google.com/docs/functions/quotas?hl=fr

// Par mégarde, je suis entré dans un tooooout petit cas d'infinite loop qui appelait la BDD et hop là, il m'a bouffé mes 50 requêtes Firebase gratuites de la journée... en 10 SECONDES

// Vous avez donc deux solutions :

// attendre pour la journée et reprendre confortablement le dev de votre feature le lendemain

// créer une autre BDD sur un autre projet une autre BDD un autre compte Firebase puis recréer un projet et une BDD Firestore. Faut changer les config dans votre variables d'environnement et hop vous pouvez recommencer.

// Dans mon cas, j'étais trop impatient, j'ai recréé un compte firebase avec une autre BDD.