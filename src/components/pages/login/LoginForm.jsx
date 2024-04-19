import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// methode module Css en important un fichier css
import "./LoginForm.css";
//après avoir installer styled-components il faut l'importer comme cela
import styled from "styled-components";
import { theme } from '../../../theme';
// import { theme } from '../../../theme/indexExemple';    <- exemple du cours
// la j'importe le design system du projet
import { CgProfile } from "react-icons/cg";
import Logo from '../../reusable-ui/Logo';
import { IoChevronForwardOutline } from "react-icons/io5";







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
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <div></div>
            <h2>Connectez-vous</h2>
            <div id='input'>
                <CgProfile />
                <input type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Entrez votre prénom"
                    required
                />
            </div>
            {/* <Link to={`/order/${inputValue}`}> */}
               <button>Accédez à mon espace <IoChevronForwardOutline /></button>
            {/* </Link> */}
        </LoginFormStyled>
    )
    // required dans l'input affiche un msg d'erreur si l'utilisateur n'entre rien, event.preventDefault empeche le rechargement de la page du a l'evenement
    // handleChange recupere l'event(on change) en parametre et ont accede à la value via event.target.value tu peu verifier en faisant console.log de l'event c'est comme ça que j'ai trouve ou etait la valeur dans l'objet event car event est un objet
    // onChange={(e) => setValue(e.target.value)} ont peu egalement utiliser onChange comme ça directement avec une fct anonyme dans l'evenement c'est une autre facon de faire que j'ai vu avec chatGpt à toi de voir celle que tu préfère
    // dans Link attention a ajouter le / avant le nom de route sinon ça ne fonctionnera pas et il y'aura une erreur que j'ai deja fait, Link to = lien vers
    // ligne 41 moi j'avais utilisze LINK pour la redirection lui dans la corection il nous a montrzer avec le hook useNavigate(les 2 ont fonctionner mais je vais faire comme lui du coup)
}

// on ce met à l'exterieur du composant, styled est la librairie qu'on a installer et importés, qui est un objet et qui va voir en propriétes toutes las balise qui existent en html et jsx, après styled. tu peu mettre ce que tu veux un lien une div un button
// ce poser la question quelle est la balise la plus globale dans mon composant ? ici c'est form, donc si ont lit ce qu'on a declarer en dessous = c'est un formulaire(balise html) qui va etre stylisé
// avec styled components ont peu passer plusieurs attribut css sur une seul ligne comme ici sur le border(comme en css classique)
// const LoginFormStyled = styled.form`
//  border: 1px solid red;

//  h1{
//     font-size: 50px;
//  }

//  h2{
//     border: 2px solid ${theme.colors.tiertiary};
//     /* ont a utiliserun design system en important la const theme dans le dossier theme(index.jsx)  */
//     color: ${theme.colors.secondary};
//  }
// `
// du coup ont doit remplacer notre balise html form par notre styled component ici LoginFormStyled et la le css est appliquer tout en conservant notre html form
// permet egalement de modifier le css des balise enfant comme ici en exemple en ajoutant des {} precede du nom de la balise
// avec l'extension style components, taper sc pour const = styled raccourci et en haut imsc pour import styled components, scf et la combinaison des 2 raccourci encore mieux!
//ça c'etait l'exemple du cours(const LoginFormStyled)

/** 4 méthode pour ajouter du style à un composants
 * 1. inline style: directement sur la balise, interpolation jsx + objet et camelCase pour les propriete css, la valeur de la proprieté entre "", par contre on ne peu pas faire des combinaison de style avec inline-style. Inline-style a la priorité sur les autres méthodes. ex:style={{ color: "red" }} à l'interieur d'une balise
 * 2. object style:meme chose juste ont declare un objet en dehors de la balise et ont lui passe en propriete: style={titreH2Style}
 * 3. modules CSS (avec className): = un fichier css,  methode module Css en important un fichier css à l'echelle du composant dans le meme dossier que celui avec le meme nom ce qui nous aide a nous repere, exemple: className='bonbon' à l'interieur d'une balise, la classe bonbon declarer dans le ficher css importer
 * 4. global style (index.css): "c'est la meme chose que le precedent" sauf c'est fichier à l'echelle du projet en entier pour avoir des comportement css sur tout le projet par exemple, mais du coup ce qu'ont mettra dedans notament des classe ne sera pas prioritaire
 */

/** Styled-Components
 * éviter le style collision (CSS, Sass)
 * conserver nested styling (Sass)
 */



const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    h1{
        font-family: "Amatic SC", sans-serif;
        font-size: ${theme.fonts.P6};
        color: ${theme.colors.white};
        margin-bottom: 32px;
    }
    h2{
        font-family: "Amatic SC", sans-serif;
        font-size: ${theme.fonts.P5};
        color: ${theme.colors.white};
        margin-bottom: 18px;
    }
    button{
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border-radius: ${theme.borderRadius.round};
        width: 400px;
        height: 53px;
        font-size: ${theme.fonts.P1};
    }
    button:hover{
            background-color: ${theme.colors.white};
            color: ${theme.colors.primary};
    }
    div{
        height: 3px;
        width: 400px;
        background-color: ${theme.colors.primary_burger};
    }
    input{
        border-radius: ${theme.borderRadius.round};
        width: 400px;
        height: 55px;
        padding: 18px, 24px;
        margin-bottom: 18px;
    }
    #input{
        width: 400px;
        height: 55px;
        margin-bottom: 18px;
        display: flex;
        flex-direction: row;
    }
`;



