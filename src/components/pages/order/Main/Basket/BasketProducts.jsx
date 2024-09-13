import { useContext } from "react";
import styled from "styled-components";      // en ajoutant macro on retrouve le nom des class dans la console comme on les a appele ici avec styleComponent(ça ne marche pas avec vite.js ici on dirait)
import AdminContext from "../../../../../context/AdminContext";
import { formatPrice } from "../../../../../utils/maths";
import BasketCard from "./BasketCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function BasketProducts() {
  // State
  const {basket, handleDeleteInBasket, isModeAdmin, setIsCollapsed, setProductSelected, setCurrentTabSelected, productSelected, username} = useContext(AdminContext);

  // Comportement
  const handleDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteInBasket(id, username);
  }

  const handleClicked = (idCardInBadket) => {
    if(!isModeAdmin){   // si le contraire de isModeAdmin actuel nous renvoie true.(donc si isAdmin actuel = false = on est pas en mode Admin)
      return
    }

    const productClickedInBasket = basket.find((product) => product.id === idCardInBadket);

    setProductSelected(productClickedInBasket);
    setIsCollapsed(false);
    setCurrentTabSelected("edit");
  }

  const checkIsSelected = (id, idInProductSelected) => { 
    return id === idInProductSelected ? true : false;
  }

  // Affichage
  return (
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((product) => {
            return(
              <CSSTransition appear={true} classNames={"abricot"} key={product.id} timeout={{enter: 500 , exit: 500}}>
                <div className="basket-card" >
                <BasketCard
                    title={product.title}
                    image={product.imageSource === "" ? IMAGE_BY_DEFAULT : product.imageSource}
                    price={formatPrice(product.price)}
                    quantity={product.quantity}
                    onDelete={(event) => handleDelete(event, product.id)}
                    isModeAdmin={isModeAdmin}
                    onClicked={() => handleClicked(product.id)}
                    isSelected={checkIsSelected(product.id, productSelected.id)}
                    className={"pomme"}
                />
                </div>
              </CSSTransition>
            )
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  )
}
// ligne 48 pas de fct anonyme car ont veut que ça s'execute directe dès le rerender, ligne 47 fct anonyme car ont veut que ça s'execute seulment apres un evenement et pas à chaque rerender
// meilleur explication tout en bas

// ligne 39 composant TransitionGroup est requis par la librairie react-transition-group quand ont veut utiliser les animation sur plusieurs element(groupe d'element, liste d'element) comme ici(on boucle dessus avec map)
// ensuite on va utiliser CSSTransition pour l'envelopper sur l'element sur lesque ont veut ajouter l'animations,ici chaque element return par map donc on le met en parent(div parent, composant parent) ce que nous return map
// CSSTransiton va avoir besoin de 3 props: classNames(entre parenthese tu lui donne le nom que tu veux ici 'abricot') qui sera la class ajouter à chaque element quand on va avoir une animation, ensuite il va avoir besoin de la props key comme on avait mis en dessous sur chaque div(ici on la remonte en haut du coup)
// Et la derniere props timeout(props qui prend un objet JS avec 2 propriete enter(temps pour faire aparaitre lanimation) et exit(duree de l'animation de sortie), chacune va avoir en valeur des number nombre de mili secondes ici 5000 = 5s qui sera la duree de l'animation quand le composant est monter pour enter et demonter pour exit)


const BasketProductsStyled = styled.div`
 /* width: 350px;
 height: 694.69px; */
 flex: 1;
 display: flex;
 flex-direction: column;
 overflow-y: scroll; // pour que ça fonctionne il faut mettre overflow: hiden sur l'element parent

  //(phase de mounting du composant on va avoir plusieurs etat appear, enter, exit)(tout ça vient de la librairie react-transition-group qu'on a importés ici)
 .abricot-appear-enter {           // appear precede l'element enter et enter-active, il ne s'applique que sur le premier element ajouté(ici dans notre basket)
  .pomme {
    transform: translateX(100px);
    opacity: 0%;
  }
 }
 .abricot-appear-enter-active {
  .pomme {
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;
  }
 }

 .abricot-enter {
  .pomme {
    transform: translateX(100px);
    opacity: 0%;
  }
 }
 .abricot-enter-active {
  .pomme {
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;
  }
 }

 .abricot-exit {
  .pomme {
    transform: translateX(0px);
    opacity: 100%;    //(1) passse de entierement visible(100%)
  }
 }
 .abricot-exit-active {
  .pommme {
    transform: translateX(-100px);    // chiffre negatif car ont veut que ça aille vers la gauche
    opacity: 0%;                 //(2) à invisible(0%)
    transition: 0.5s;
  }
 }

 .basket-card {
  margin: 10px 16px;
  height: 86px;
  box-sizing: border-box;
  &:first-child {         // Attention ne pas oublier le & devant juste à cause de ça mon css ne fonctionner pas! je crois dans la nouvelle version de react il faut tout le temps le mettre à voir !
    margin-top: 20px;
  }
  &:last-child{
    margin-bottom: 20px;
  }
 }
`;


// Quand utiliser une fonction anonyme
// Il y a des cas où l'utilisation d'une fonction anonyme est nécessaire, par exemple lorsque tu veux passer des paramètres à une fonction dans une prop d'événement :

// jsx
// Copier le code
// <button onClick={() => handleClick(param)}>Click Me</button>
// Dans ce cas, tu crées une fonction anonyme qui appelle handleClick avec param.

// Conclusion
// Pour ton cas, passer directement le résultat de checkIsSelected est correct et évite les problèmes de comparaison de références. Utiliser des fonctions anonymes devrait être réservé aux situations où tu dois passer des paramètres à des handlers d'événements.



// Exactement, tu as bien compris !

// Fonctions anonymes pour les props d'événements
// Quand utiliser une fonction anonyme :

// Lorsqu'une prop d'événement nécessite des paramètres et que tu veux que la fonction ne s'exécute que lorsqu'un événement spécifique se produit.
// Exemple typique : onClick, onChange, etc.
// Dans ce cas, la fonction anonyme sert à envelopper l'appel à la fonction avec les paramètres spécifiques, et cette fonction anonyme ne s'exécutera que lorsque l'événement sera déclenché.
// jsx
// Copier le code
// <button onClick={() => handleClick(param)}>Click Me</button>
// Ici, handleClick(param) ne s'exécutera que lorsque le bouton sera cliqué.

// Utilisation directe des fonctions sans fonction anonyme
// Quand utiliser une fonction directement :

// Lorsqu'une prop n'est pas un gestionnaire d'événement mais plutôt une valeur calculée ou une condition qui doit être évaluée immédiatement lors du rendu ou du re-render.
// Exemple : condition logique, formatage, calcul de valeurs, etc.
// Cela permet d'éviter la création de nouvelles fonctions à chaque rendu et améliore les performances en permettant à React de comparer efficacement les références.
// jsx
// Copier le code
// isSelected={checkIsSelected(product.id, productSelected.id)}
// Ici, checkIsSelected(product.id, productSelected.id) est évalué immédiatement lors du rendu et le résultat (un booléen) est passé à isSelected.

// Résumé
// Fonction anonyme pour les événements : Utilisée pour envelopper les appels de fonctions avec des paramètres spécifiques afin de différer leur exécution jusqu'à ce que l'événement se produise.
// Fonction directe pour les valeurs/conditions : Utilisée pour évaluer immédiatement les expressions ou les conditions et éviter la création de nouvelles références de fonctions à chaque rendu.
// En adoptant cette distinction, tu pourras écrire du code React plus performant et éviter les comportements inattendus liés aux re-renders et aux comparaisons de références. Si tu as d'autres questions, n'hésite pas à demander !


