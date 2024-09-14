import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// methode module Css en important un fichier css
import "./LoginForm.css";
//après avoir installer styled-components il faut l'importer comme cela
import styled from "styled-components";
import { theme } from '../../../theme';
// import { theme } from '../../../theme/indexExemple';    <- exemple du cours
// la j'importe le design system du projet
import { IoChevronForward } from "react-icons/io5";
import TextInput from '../../reusable-ui/TextInput';
import { BsPersonCircle } from "react-icons/bs";
import Button from '../../reusable-ui/Button';
import { authenticateUser, createUser, getUser } from '../../../api/user';
import Welcome from './Welcome';

// Les 4 endroit ou on peu retrouver de la data
// Backend(base de données, API)
// local storage(navigateur)
// global state (redux, context)
// local state(useState)

export default function LoginForm() {
    // state
    const [username, setUsername] = useState("");
    // on utilise le hook useNavigate pour forcer la redirection vers une autre page
    const navigate = useNavigate();
    // on l'appelle navigate car ça a du sens, à chaque fois qu'on va appeler navigate il va nous executer cet fct(ce hook)

    // comportement
    const handleSubmit = async (event) => {
        event.preventDefault();

        await authenticateUser(username); 

        // console.log(event);
        // console.log(event.target[0].value);
        // alert(`Bonjour ${event.target[0].value}`);
        // je me suis casser la tete a faire ça mais ont pouvez simplement recuperer la valeur via le state comme en dessous car avec onChange a chaque fois qu'on tape quelque chose le state est mis à jour
        // alert(`Bonjour ${username}`)
        setUsername("");
        // on execute navigate au moment de la soumission, qui va prendre en parametre le nom de la page vers laquelle je veux rediriger mon utilisateur
        navigate(`/order/${username}`);
        // avec navigate oublie pas le / avant order j'avais un petit probleme
    }

    const handleChange = (event) => {
        console.log(event);
        setUsername(event.target.value);
    }

    // methode Object style
    const titreH2Style = { backgroundColor: "blue", color: "white", fontSize: "15px" };

    //affichage (render)
    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>

            <Welcome/>

            <div>
                {/* pour faire des composant generique reutilisable comme ici avec notre Input qu'on a cree en sous composant, ont ne met rien de specifique à l'interieur du composant donc ici input.jsx on ne met que du generique et ici à l'exterieur ont lui passe tout le specifique au composant ce qui nous donne un composant reutilisable */}
                <TextInput
                value={username}
                onChange={handleChange}
                placeholder={"Entrez votre prénom"}
                required
                icon={<BsPersonCircle  />}
                className={"input-login"}
                version="normal"
                />

                <Button 
                    label={"Accédez à mon espace"}
                    icon={<IoChevronForward  />}
                    version='primary'
                />

            </div>

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


// Attention au element html que tu cree avec styled component ici c'est bon il falait bien cree un formulaire pour pouvoir le soumettre et recuperer les donnee (dans la video il avait fait l'erreur de cree une div attention !)
const LoginFormStyled = styled.form`
    /* background: green; */
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 2.5rem ${theme.spacing.lg}; // car 2rem = 32 px, 1rem = 16px
    border-radius: ${theme.borderRadius.round};
    font-family: "Amatic SC", cursive;
    h1{
        /* border: 1.5px solid #f56a2c; les border comme ça servent à identifier nos éléments*/
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P5};
    }
    h2{
       margin: 20px 10px 10px;
       color: ${theme.colors.white};
       font-size: ${theme.fonts.size.P4};
    }
    hr{
      border: 1.5px solid ${theme.colors.loginLine};
      margin-bottom: ${theme.gridUnit * 5}px; //pour faire 40px
    }
   
    .input-login {
        margin: 18px 0;
    }
`;


// LIGNE 59, pour mon probleme pour mettre l'icone à coter du placeholder en faite il fallai mettre les 2 element dans un element parent une div et ça les met à coter
// et du coup je remarque qu'il faut faire comme ça partout une div avec les element pour pouvoir les placer cote à cote avec display flex, sauf pour le button ici
// 2fois la classe icon car il y'a celle dans le input et celle dans le button et ont le meme nom mais sont 2 classe differente
//ctrl + espace nous montre aussi les props a mettre dans un composant
// à chaque fois que tu cree un composant pose toi la question ou ça va aller ? dans reusable ui? ou alors dans pages si composant specifique et non reutilisable
