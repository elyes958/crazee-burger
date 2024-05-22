import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext, useState } from "react";
import PanelContext from "../../../../context/PanelContext";
import selectTabContext from "../../../../context/selectTabContext";
// ça c'est ce que j'ai fait moi attention car j'ai donner le meme nom à mes composant que ceux de la correction tout le dossier AdminPanel c'etait mon travail donc attention


export default function AdminTabs() {
  // State
  const panelContext = useContext(PanelContext);
  // const [selectedTab, setSelectedTab] = useState(1); j'ai utiliser context sur le parent avec ce state donc plus besoin de cet ligne
  const selectedTabContext = useContext(selectTabContext);

  // Comportements
  const handleClicked = () => {
    // console.log("cliquer !");
    panelContext.setDisplayPanel(!panelContext.displayPanel);
  }

  const handleSelect = (id) => {
    selectedTabContext.setSelectedTab(id);

    // si c'est true et que le panel est cache, quand je clique sur button ajouter/modifer je change le state et le panel apparait
    if(panelContext.displayPanel){
      panelContext.setDisplayPanel(!panelContext.displayPanel);
    }
  }
  
  // Affichage
  return (
    <AdminTabsStyled>
      {panelContext.displayPanel ? <Tab svg={<FiChevronDown />} className="second" onClick={handleClicked} /> : <Tab svg={<FiChevronUp />} className="first" onClick={handleClicked}/> }
        <Tab key={1} texte={"Ajouter un produit"} svg={<AiOutlinePlus />} onClick={() => handleSelect(1)} isSelected={selectedTabContext.selectedTab === 1} />
        <Tab key={2} texte={"Modifier un produit"} svg={<MdModeEditOutline />} onClick={() => handleSelect(2)} isSelected={selectedTabContext.selectedTab === 2}/>
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  width: 100%;
  height: 44px;
  /* border: 1px solid green; */

  .first{
    margin-left: 71px;
  }
  .second{
    margin-left: 71px;
    background-color: black;
    color: white;
  }
`;


// Explication du comportement des fct fléchés, j'ai eu le problème:
// d'accord merci beaucoup cela fonctionne , dit moi par contre il y'a quelque chose que j'ai du mal a comprendre, pourquoi dans le onClick on passe la fonction comme ça :  () => handleSelect("Ajouter un produit") et non directement comme ça :  handleSelect("Ajouter un produit") ?
// ChatGPT
// C'est une excellente question ! La différence entre () => handleSelect("Ajouter un produit") et handleSelect("Ajouter un produit") réside dans le moment où la fonction est appelée.

// () => handleSelect("Ajouter un produit")
// Lorsque tu utilises une fonction fléchée comme ceci :
// onClick={() => handleSelect("Ajouter un produit")}
// Cela crée une nouvelle fonction anonyme qui appelle handleSelect("Ajouter un produit") lorsque l'événement onClick est déclenché. Cette approche permet de passer des arguments à handleSelect au moment où l'événement onClick se produit. En d'autres termes, handleSelect n'est appelé que lorsque l'utilisateur clique sur l'élément.

// handleSelect("Ajouter un produit")
// Si tu utilises directement handleSelect("Ajouter un produit") comme ceci :


// onClick={handleSelect("Ajouter un produit")}
// Cela appelle immédiatement la fonction handleSelect lors de l'évaluation du JSX, c'est-à-dire au moment où le composant est rendu. Cela signifie que handleSelect sera exécuté immédiatement et son résultat sera passé à onClick, ce qui n'est généralement pas le comportement souhaité, car tu veux que la fonction soit appelée en réponse à un clic, et non au moment du rendu.

// Exemples pour clarifier
// Fonction fléchée
// Voici un exemple où la fonction fléchée est utilisée correctement :

// <button onClick={() => handleSelect("Ajouter un produit")}>Ajouter un produit</button>
// Rendu du composant : onClick reçoit une fonction anonyme.
// Au clic : La fonction anonyme est exécutée, et à son tour, elle appelle handleSelect("Ajouter un produit").
// Appel direct de la fonction
// Voici ce qui se passe si tu passes directement l'appel de la fonction :

// <button onClick={handleSelect("Ajouter un produit")}>Ajouter un produit</button>
// Rendu du composant : handleSelect("Ajouter un produit") est appelé immédiatement et son retour (probablement undefined) est passé à onClick.
// Au clic : Rien ne se passe, car onClick a reçu undefined.
// Conclusion
// Utiliser une fonction fléchée () => handleSelect("Ajouter un produit") garantit que handleSelect est appelé au bon moment, c'est-à-dire en réponse à un événement de clic. Cela te permet également de passer des arguments à la fonction de gestion d'événement au moment du clic, ce qui n'est pas possible avec un simple passage de référence de fonction.

// Pas tout à fait. La distinction entre les deux formes (() => handleClicked(param) et handleClicked()) ne concerne pas seulement la présence ou l'absence de paramètres, mais plutôt le moment où la fonction est appelée. Voici une clarification plus détaillée :

// Lorsque la fonction prend des paramètres
// Syntaxe correcte :


// <button onClick={() => handleClicked(param)}>Cliquez-moi</button>
// Dans ce cas, tu utilises une fonction fléchée pour créer une nouvelle fonction anonyme qui appelle handleClicked avec param lorsque le bouton est cliqué. La fonction handleClicked n'est pas appelée immédiatement au moment du rendu du composant. Elle est appelée seulement lorsque l'événement onClick se produit.

// Lorsque la fonction ne prend pas de paramètres
// Même si la fonction ne prend pas de paramètres, tu ne dois pas l'appeler immédiatement dans onClick. Voici comment faire :

// Syntaxe correcte :

// <button onClick={handleClicked}>Cliquez-moi</button>
// ou avec une fonction fléchée :

// <button onClick={() => handleClicked()}>Cliquez-moi</button>
// Les deux syntaxes ci-dessus sont correctes. Cependant, la première est plus concise et plus couramment utilisée lorsqu'il n'y a pas de paramètres.

// Erreur courante à éviter
// Syntaxe incorrecte :

// <button onClick={handleClicked()}>Cliquez-moi</button>
// Dans ce cas, handleClicked est appelé immédiatement lorsque le composant est rendu, ce qui n'est pas ce que tu veux. Tu veux que handleClicked soit appelé seulement lorsque l'utilisateur clique sur le bouton.

// Résumé
// Avec paramètres : Utilise une fonction fléchée pour créer une nouvelle fonction anonyme qui appelle ta fonction avec les paramètres lorsque l'événement se produit.


// <button onClick={() => handleClicked(param)}>Cliquez-moi</button>
// Sans paramètres : Tu peux directement passer la référence de la fonction.


// <button onClick={handleClicked}>Cliquez-moi</button>
// Ou tu peux utiliser une fonction fléchée (mais ce n'est pas nécessaire dans ce cas).

// <button onClick={() => handleClicked()}>Cliquez-moi</button>
// En suivant ces règles, tu t'assures que tes fonctions sont appelées au bon moment, en réponse aux événements utilisateur.

// ok je comprend mieux ont appelle jamais une fonction directement dans le onClick et selon qu'il y'a des parametre ou non ont choisit une des deux formes c'est bien ça ?
// ChatGPT
// Exactement, tu as bien compris ! En résumé :

// Règles Générales pour onClick en React
// Sans paramètres :

// Forme concise : Si la fonction ne prend pas de paramètres, tu peux directement passer la référence de la fonction à onClick.
// <button onClick={handleClicked}>Cliquez-moi</button>
// Avec paramètres :

// Fonction fléchée : Si la fonction prend des paramètres, utilise une fonction fléchée pour créer une fonction anonyme qui appelle ta fonction avec les paramètres appropriés.
// <button onClick={() => handleClicked(param)}>Cliquez-moi</button>
// Pourquoi ne pas appeler directement la fonction ?
// Appeler la fonction directement (e.g., onClick={handleClicked()}) exécuterait la fonction immédiatement lors du rendu du composant, ce qui n'est pas ce que tu veux. Tu veux que la fonction soit exécutée seulement en réponse à l'événement onClick, c'est-à-dire lorsque l'utilisateur clique sur l'élément.