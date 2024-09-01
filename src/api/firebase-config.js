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