import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// methode module Css en important un fichier css
import "./LoginForm.css";


export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("");
    // on utilise le hook useNavigate pour forcer la redirection vers une autre page
    const navigate = useNavigate();
    // on l'appelle navigate car ça a du sens, à chaque fois qu'on va appeler navigate il va nous executer cet fct(ce hook)

    // comportement
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
        // console.log(event.target[0].value);
        // alert(`Bonjour ${event.target[0].value}`);
        // je me suis casser la tete a faire ça mais ont pouvez simplement recuperer la valeur via le state comme en dessous car avec onChange a chaque fois qu'on tape quelque chose le state est mis à jour
        // alert(`Bonjour ${inputValue}`)
        setInputValue("");
        // on execute navigate au moment de la soumission, qui va prendre en parametre le nom de la page vers laquelle je veux rediriger mon utilisateur
        navigate(`/order/${inputValue}`);
        // avec navigate oublie pas le / avant order j'avais un petit probleme
    }

    const handleChange = (event) => {
        console.log(event);
        setInputValue(event.target.value);
    }

    // methode Object style
    const titreH2Style = {backgroundColor:"blue", color:"white", fontSize: "15px" };

    //affichage (render)
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1 style={{ color: "red" }} >Bienvenue chez nous !</h1>
            <br />
            <h2 className='bonbon'>Connectez-vous</h2>
            <input type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Entrez votre prénom..."
                required
            />
            {/* <Link to={`/order/${inputValue}`}> */}
               <button>Accédez à votre espace</button>
            {/* </Link> */}
        </form>
    )
    // required dans l'input affiche un msg d'erreur si l'utilisateur n'entre rien, event.preventDefault empeche le rechargement de la page du a l'evenement
    // handleChange recupere l'event(on change) en parametre et ont accede à la value via event.target.value tu peu verifier en faisant console.log de l'event c'est comme ça que j'ai trouve ou etait la valeur dans l'objet event car event est un objet
    // onChange={(e) => setValue(e.target.value)} ont peu egalement utiliser onChange comme ça directement avec une fct anonyme dans l'evenement c'est une autre facon de faire que j'ai vu avec chatGpt à toi de voir celle que tu préfère
    // dans Link attention a ajouter le / avant le nom de route sinon ça ne fonctionnera pas et il y'aura une erreur que j'ai deja fait, Link to = lien vers
    // ligne 41 moi j'avais utilisze LINK pour la redirection lui dans la corection il nous a montrzer avec le hook useNavigate(les 2 ont fonctionner mais je vais faire comme lui du coup)
}

/** 4 méthode pour ajouter du style à un composants
 * 1. inline style: directement sur la balise, interpolation jsx + objet et camelCase pour les propriete css, la valeur de la proprieté entre "", par contre on ne peu pas faire des combinaison de style avec inline-style. Inline-style a la priorité sur les autres méthodes. ex:style={{ color: "red" }}
 * 2. object style:meme chose juste ont declare un objet en dehors de la balise et ont lui passe en propriete: style={titreH2Style}
 * 3. modules CSS (avec className): = un fichier css,  methode module Css en important un fichier css à l'echelle du composant dans le meme dossier que celui avec le meme nom ce qui nous aide a nous repere
 * 4. global style (index.css): "c'est la meme chose que le precedent" sauf c'est fichier à l'echelle du projet en entier pour avoir des comportement css sur tout le projet par exemple, mais du coup ce qu'ont mettra dedans notament des classe ne sera pas prioritaire
 */

/** Styled-Components
 * éviter le style collision (CSS, Sass)
 * conserver nested styling (Sass)
 */
