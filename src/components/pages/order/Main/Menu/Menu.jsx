import { useContext, useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu";
import { theme } from "../../../../../theme";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import AdminContext from "../../../../../context/AdminContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { EMPTY_PRODUCT, IMAGE_NO_STOCK } from "../../../../../enums/product";
// import Product from "./Product";
import Loader from "./Loader.jsx"  // ctrl shift h pour importer le chemin
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { menuAnimation } from "../../../../../theme/animations.js";
import { convertStringToBoolean } from "../../../../../utils/string.js";
import RibbonAnimated from "./RibbonAnimated.jsx";
import { ribbonAnimation } from "./RibbonAnimated.jsx";



const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  // state
  const {isModeAdmin, menu, handleDelete, resetMenu, setCurrentTabSelected, setIsCollapsed, productSelected, setProductSelected, titleEditRef, basket, handleAddToBasket, majQuantity, handleDeleteInBasket, username} = useContext(AdminContext);

  // Comportement (gestionnaire d'évenement ou "event handler")
  const handleCardDelete = (event, idOfProductToDelete) => {
    event.stopPropagation();
    handleDelete(idOfProductToDelete, username);
    handleDeleteInBasket(idOfProductToDelete, username); // je le supprime egalement du basket
    idOfProductToDelete === productSelected.id  && setProductSelected(EMPTY_PRODUCT); // permet d'ecrire une condition sur une ligne sans utiliser de if
    // titleEditRef.current.focus();
  }
  
  const handleClicked = async (idProductSelected) => {    // mot cle async, handleClicked devient une fct asynchrone
    if(!isModeAdmin) return;  // si ont est pas en modeAdmin ont execute pas cet fct
    // si le contraire de la valeur de isModeAdmin est = à true alors on execute ce code et on sort de la fct(ici on a initialiser à false le modeAdmin donc si c'est false la condition devien true et on sort de la fct)
    // dans la condition c'est que vaut le contraire de isModeAdmin(actuel) pas si isModeAdmin actuel = le contraire de isModeAdmin de base
    // en gros il faut regarder si le contraire de isModeAdmin actuel te renvoie true pour entrer dans la condition, donc il faut regarder ce que vaut le contraire de isModeAdmin actuel, pas ce que vaut le contraire de isModeAdmin de base(la ou on la initialiser)

    // on fait une copie du state que quand on modifie le state la ce n'est pas le cas
    console.log("idProductSelected: ", idProductSelected);
    const productClickedOn = menu.find((product) => product.id === idProductSelected);
    console.log("productSelected: ", productClickedOn);
    
    await setProductSelected(productClickedOn);   // et donc ont met un await devant tous nos setters pour dire d'attendre la fin de leur execution avant de passer à la suite
    await setIsCollapsed(false); // au clic on ouvre le panel Admin
    await setCurrentTabSelected("edit"); // et on le met sur l'onglet edit

    // un setter a un comportement asynchrone il ne va pas terminer de s'executer tout de suite, donc il faut qu'ont attende que les setters s'executent avant d'executer le titleEditRef.current.focus() pour eviter le bug qu'on a eu
    // il faut donc que ces fct soit comprise dans une fct qui est asynchrone

    titleEditRef.current.focus(); // il faut attendre avant d'executer cet ligne la car le panelAdmin et Edit ne sont pas encore ouvert avant d'actualiser la page ce qui provoque une erreur et ne met pas le focus sur le premier element cliquer
    

    // ce que j'ai fait moi
    // console.log("id : " + idProductSelected);
    // setCurrentTabSelected("edit");
    // setIsCollapsed(false);

    // if(idEditCard === idProductSelected){
    //   setIdEditCard(null);
    // } else {
    //   setIdEditCard(idProductSelected);
    // }

  }

  const checkIfProductIsClicked = (idProductInMenu, idProductClickedOn) => { 
    return idProductInMenu === idProductClickedOn ? true : false;
  }

  const handleSelectInBasket = (event, idProductSelected) => {
    event.stopPropagation();

    const productClickedOn = menu.find((product) => product.id === idProductSelected);

    const inBasket = basket.find((product) => product.id === idProductSelected);
    // find nous renvoie "undefined" si le produit n'est pas deja dans le basket

    if(!inBasket){
      const infoProductSelected = {
        imageSource   : productClickedOn.imageSource,
        title   : productClickedOn.title,
        price   : productClickedOn.price,
        quantity: productClickedOn.quantity + 1,
        // id      : new Date().getTime(),
        id      : idProductSelected,
        isAvailable : productClickedOn.isAvailable,
        isPublicised: productClickedOn.isPublicised,
      }
  
      handleAddToBasket(infoProductSelected, username);
    } else{
      inBasket.quantity += 1;
      majQuantity(inBasket, username);
    }
  
  }


  // Affichage

  if (menu === undefined) return <Loader/>  // une seul instruction dans le if donc pas besoin d'accolades, nous permet d'afficher ce composant pdt le chargement de la pasge et la recuperations des donnee via l'API sur firebase(firestore)
  
  if(menu.length === 0) {
  if (!isModeAdmin) return <EmptyMenuClient/>
  return <EmptyMenuAdmin onReset={() => resetMenu(username)} /> // on peu direct lui envoyer du specifique car on sais qu'on ne va pas rendre ce composant reutilisable
 } 
  // resetMenu ne prend rien param et n'a qu'une seul instruction donc on peu le definir direct dans le onClick

  let cardContainerClassName = isModeAdmin ? "card-container is-hoverable" : "card-container";

  return (
    // <MenuStyled className="menu"> // quand j'ai laisser menu comme ça j'ai eu un bug et ça ne fonctionner pas du coup j'ai utiliser l'autre technique en mettant mon composant MenuStyled dans la props component de Transition group avec ça className à coter et ça a fonctionner
      <TransitionGroup component={MenuStyled} className="menu">
      {menu.map((produit) => {
        // console.log("isAvailable: " + produit.isAvailable)
        return (
          <CSSTransition classNames={"menu-animation"} key={produit.id} timeout={300}>
            <div className={cardContainerClassName}>
            {convertStringToBoolean(produit.isPublicised) && <RibbonAnimated/>}
            <Card
              onDelete={(event) => handleCardDelete(event, produit.id)}
              hasDeleteButton={isModeAdmin}
              key={produit.id}
              title={produit.title}
              imageSource={produit.imageSource === "" ? IMAGE_BY_DEFAULT : produit.imageSource}
              leftDescription={formatPrice(produit.price)}
              onClicked={() => handleClicked(produit.id)}
              isHoverable={isModeAdmin}
              isSelected={checkIfProductIsClicked(produit.id, productSelected.id)}
              selectInBasket={(event) => handleSelectInBasket(event, produit.id)}
              overlapImageSource={IMAGE_NO_STOCK}
              isOverlapImageVisible={convertStringToBoolean(produit.isAvailable) === false}
            />
            </div>
          </CSSTransition>
          // finalement comme on a rendu notre composant reutilisable et donc qu'on a fait remonter le specifique dans les props, alor on est obliger d'utiliser ça et pas l'autre methode en bas
          // <Card {...produit} />  // meme chose que ligne 5, ecriture bc plus simple spread operator dans un objet, cet methode fonctionne que si vous etes certain que "produit" a tous les élements dont "Product" a besoin. Du coup la methode au dessus est preferable et conseiller.
        )
      })};
      </TransitionGroup>
    /* </MenuStyled> */
  )



  // ce que j'ai fait moi
  // if(menu.length > 0){
  // return (
  //   <MenuStyled className="menu">
  // } else if(isModeAdmin) {
  //   return (
  //     <AdminMenuVide>
  //         <span>LE MENU EST VIDE ?</span>
  //         <span>CLIQUEZ CI-DESSOUS POUR LE RENITIALISER</span>
  //         <button onClick={() => location.reload()}>Générer de nouveaux produits</button>
  //     </AdminMenuVide>
  //   )
  // } else {
  //   return(
  //     <span>VICTIME DE NOTRE SUCCES ! :D <br />DE NOUVELLES RECETTES SONT EN COURS DE PREPARATION <br />A TRES VITE !</span>
  //   )
  // }
    
 
}


const MenuStyled = styled.div`
    /* border: 1px solid blue; */
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(3, 1fr);  // = 4 colonnes avec tout l'espace disponible
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  // 2 colonne, minimum 300px et si jamais y'a encore de la place tu prend le reste. auto-fit = tu me met autant de colonne possible tant que ça rentre dedans */
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;  /* Centre les éléments horizontalement */
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    overflow-y: scroll; // du coup le contenu qu'on a cacher avec overflow-y hidden dans le composant parent main, ici ont le rend scroll pour pouvoir y acceder en scrollant

   ${menuAnimation}

   .card-container{
      position: relative;
      height: 330px; // pour éviter une zone de click verticale bizarre qu'on voit qu'au pointeur de l'outil inspect du navigateur
      border-radius: ${theme.borderRadius.extraRound};

      &.is-hoverable {
        :hover {
          /* border: 1px solid red; */
          transform: scale(1.05);
          transition: ease-out 0.4s;
        }
      }
      .ribbon {
        z-index: 2;      // le ruban ce retrouver derriere donc on lui a mis un z-index pour qu'il ce retrouve devant
      }
    }
    ${ribbonAnimation} 
`;
// rappel ligne 181, quand un element est en position absolute il a besoin d'un element parent en position relative pour pouvoir s'y "accrocher" voila pourquoi ont doit mettre position relative sur la div parent a ribbon pour que le ruban s'accroche ou l'on veut

const AdminMenuVide = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 320px;
  margin-left: 605px;
  button{
    width: 250px;
    border-radius: 5px;
    border: 1px;
    padding: 19px 24px 19px 24px;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    font-size: ${theme.fonts.size.XS};
    text-align: center;
    font-weight: ${theme.fonts.weights.bold};
    line-height: 12px;
  }
`;
