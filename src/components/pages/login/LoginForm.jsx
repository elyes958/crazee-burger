import React, { useState } from 'react';

export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("");

    // comportement
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target[0].value);
        alert(`Bonjour ${event.target[0].value}`);
        // je me suis casser la tete a faire ça mais ont pouvez simplement recuperer la valeur via le state comme en dessous car avec onChange a chaque fois qu'on tape quelque chose le state est mis à jour
        alert(`Bonjour ${inputValue}`)
        setInputValue("");
    }

    const handleChange = (event) => {
        console.log(event);
        setInputValue(event.target.value);
    }

    //affichage (render)
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous!</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Entrez votre prénom..."
                required
            />
            <button>Accédez à votre espace</button>
        </form>
    )
    // required dans l'input affiche un msg d'erreur si l'utilisateur n'entre rien, event.preventDefault empeche le rechargement de la page du a l'evenement
    // handleChange recupere l'event(on change) en parametre et ont accede à la value via event.target.value tu peu verifier en faisant console.log de l'event c'est comme ça que j'ai trouve ou etait la valeur dans l'objet event car event est un objet
    // onChange={(e) => setValue(e.target.value)} ont peu egalement utiliser onChange comme ça directement avec une fct anonyme dans l'evenement c'est une autre facon de faire que j'ai vu avec chatGpt à toi de voir celle que tu préfère
}
