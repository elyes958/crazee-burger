// Ticket f05 live ama 2 sur 3, fichier de corection pour aller plus vite avec le css qu'on a pas fait en video, Card remplace Products
import styled from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";
import { TiDelete } from "react-icons/ti";

export default function Card({ title, imageSource, leftDescription, hasDeleteButton, onClick }) {
  return (
    <CardStyled hasDeleteButton={hasDeleteButton} className="produit">
      {hasDeleteButton && <button className="delete-button" aria-label="delete-button">
        <TiDelete className="icon"/>
      </button>}
      {/* {modeAdmin ? <TiDelete onClick={onClick} /> : null} */}
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  )
}
// ligne 10 ce que j'ai fait moi

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  /* grid-template-rows: ${props => props.modeadmin ? '1px 65% 1fr' : '65% 1fr'}; */  // ce que j'ai fait moi
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;  // pour que .delete-button ce mette en position absolute par rapport à la carte on lui met position relative et il devient donc le premier parent en relative

  .delete-button {
    border: 1px solid red;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
    z-index: 2;
    padding: 0;
    border: none;
    background: none;

    .icon{
      height: 100%;
      width: 100%;
    }

    :hover {
      color: ${theme.colors.red};
    }
    :active{
      color: ${theme.colors.primary};
    }
  }
  // ligne 45, oublie pas quand tu met position absolute il ce met en fct du premier element parent qui a postion relative sinon l'ecran par default, il faut donc ajouter postion relative à la card

  // svg = ce que j'ai fait moi
  /* svg{
      color: ${theme.colors.primary};
      cursor: pointer;
      width: 30px;
      height: 30px;
      margin-left: 175px;
      &:hover{
        color: ${theme.colors.redSecondary};
      }
  } */

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`

// Explication ligne 9:

// Dans votre composant, vous passez la prop modeAdmin à CardStyled afin que le composant stylisé ait accès à cette prop pour pouvoir conditionner certains styles en fonction de sa valeur.
// Même si vous récupérez modeAdmin via le destructuring dans la fonction Card, cela ne transmet pas automatiquement cette prop à CardStyled. CardStyled est un composant stylisé qui doit recevoir explicitement la prop modeAdmin pour pouvoir l'utiliser dans ses styles.

// En résumé, la raison pour laquelle vous devez passer explicitement modeAdmin à CardStyled est que ce composant stylisé utilise cette prop pour conditionner ses styles. Le destructuring dans la fonction Card vous permet de récupérer la valeur de modeAdmin pour l'utiliser dans la logique de rendu (par exemple, afficher ou non l'icône de suppression), mais cela ne suffit pas pour que CardStyled ait accès à modeAdmin. Vous devez donc lui passer explicitement cette prop pour qu'il puisse l'utiliser dans ses styles.


// Explication ligne 32:
// si j'ai bien compris c'est une fonction anonyme qui prend en parametre les props(comme un seul parametre pas besoin de parenthèse) et qui return la props modeAdmin et si celle ci est true on affiche le premier cas sinon le 2eme c'est bien cela ?
// Oui, c'est bien cela. Décomposons cette ligne pour bien comprendre son fonctionnement :

// Interpolation de Styled Components:
// L'utilisation de ${} permet d'insérer une expression JavaScript dans une chaîne de caractères dans styled-components.

// Fonction fléchée:
// La fonction fléchée (props => ...) prend props comme argument.

// props contient toutes les propriétés passées au composant stylisé CardStyled.
// Condition ternaire:
// La condition ternaire props.modeAdmin ? '1px 65% 1fr' : '65% 1fr' est utilisée pour déterminer la valeur de grid-template-rows.

// Si props.modeAdmin est true, alors '1px 65% 1fr' est retourné.
// Sinon, '65% 1fr' est retourné.


// props : L'objet des propriétés du composant. Il contient toutes les props passées au composant CardStyled, y compris modeAdmin.
// props.modeAdmin : Vérifie la valeur de la prop modeAdmin.
// Si props.modeAdmin est true : La chaîne '1px 65% 1fr' est retournée.
// Si props.modeAdmin est false : La chaîne '65% 1fr' est retournée.

// Oui, tu peux tout à fait utiliser la destructuration pour accéder directement à modeAdmin dans la fonction fléchée. Voici comment tu peux le faire :

// jsx
// Copier le code
// grid-template-rows: ${({ modeAdmin }) => modeAdmin ? '1px 65% 1fr' : '65% 1fr'};




// Dans styled-components, pour accéder aux props dans le bloc de styles, il est nécessaire d'utiliser une fonction. Cela est dû au fonctionnement interne de styled-components, qui génère dynamiquement les styles basés sur les props passées. Voici pourquoi et comment cela fonctionne :

// Pourquoi utiliser une fonction ?
// styled-components génère les styles au moment de la création du composant, en utilisant les props fournies. Pour conditionner les styles en fonction des props, on doit utiliser une fonction qui reçoit ces props et retourne les styles appropriés. Sans la fonction, styled-components ne sait pas comment accéder aux props pour déterminer quels styles appliquer.


// Fonctionnement interne de styled-components :
// Définition des styles dynamiques :

// Lorsque styled-components rend le composant, il passe les props à la fonction.
// La fonction retourne les styles conditionnels basés sur les valeurs des props.
// Génération des styles :

// styled-components génère une classe CSS unique avec les styles calculés.
// Cette classe est appliquée au composant rendu, garantissant que les styles sont appliqués correctement en fonction des props.
// En résumé :
// Utilisation de la fonction : Nécessaire pour accéder dynamiquement aux props et conditionner les styles.
// Syntaxe de la fonction : Une fonction fléchée est souvent utilisée pour sa concision, mais une fonction normale peut également être utilisée.