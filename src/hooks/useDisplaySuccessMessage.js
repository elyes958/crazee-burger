// on essaye de cree un custom hooks, qui est juste une fonction qui contient des hooks, on aura dedans seulment du state et des comportements
// convention on nomme le fichier comme ça avec use au debut. Du coup en utilisant ça on peu extraire de la logique state et du comportement d'un composant pour n'en garder que l'affichage et eventuellement des gestionaire d'evenement(handle)

import { useState } from "react";


export  const useSuccessMessage = () => {
    // state
    const [isSubmitted, setIsSubmitted] = useState(false);

    // comportements
    const displaySuccessMessage = () => {
        setIsSubmitted(true); // le formulaire a etait soumis donc on passe le state a true pour afficher le message
        setTimeout(() => {      // premier param fct fléché, le 2eme temps en mili secondes
            setIsSubmitted(false)   // instruction qui s'execute au bout de 2000 mili secondes(2 seconde)
        }, 2000)
    }

    return { isSubmitted, displaySuccessMessage }   // on return le state et le comportement sous forme d'un objet destructurer, oublie pas on est dans une fonction donc c'est pour ça qu'on return
}
