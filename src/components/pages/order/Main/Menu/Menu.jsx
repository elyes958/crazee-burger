import { useContext, useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../../fakeData/fakeMenu";
import { theme } from "../../../../../theme";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import AdminContext from "../../../../../context/AdminContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
// import Product from "./Product";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  // state
  const {isModeAdmin, menu, handleDelete, resetMenu} = useContext(AdminContext);

  // Comportement
  const handleCardDelete = (idOfProductToDelete) => {
    handleDelete(idOfProductToDelete)  // il a qu'une instruction tu peu directement l'envoyer dans le onDelete de la card si tu veux
  }

 
  
  // Affichage
  
  if(menu.length === 0) {
  if (!isModeAdmin) return <EmptyMenuClient/>
  return <EmptyMenuAdmin onReset={resetMenu} /> // on peu direct lui envoyer du specifique car on sais qu'on ne va pas rendre ce composant reutilisable
 } 
  // resetMenu ne prend rien param et n'a qu'une seul instruction donc on peu le definir direct dans le onClick

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        return (
          <Card
            onDelete={() => handleCardDelete(produit.id)}
            hasDeleteButton={isModeAdmin}
            key={produit.id}
            title={produit.title}
            imageSource={produit.imageSource === "" ? IMAGE_BY_DEFAULT : produit.imageSource}
            leftDescription={formatPrice(produit.price)}
          />
          // finalement comme on a rendu notre composant reutilisable et donc qu'on a fait remonter le specifique dans les props, alor on est obliger d'utiliser ça et pas l'autre methode en bas
          // <Card {...produit} />  // meme chose que ligne 5, ecriture bc plus simple spread operator dans un objet, cet methode fonctionne que si vous etes certain que "produit" a tous les élements dont "Product" a besoin. Du coup la methode au dessus est preferable et conseiller.
        )
      })};
    </MenuStyled>
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
    grid-template-columns: repeat(4, 1fr);  // = 4 colonnes avec tout l'espace disponible
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));  // 2 colonne, minimum 300px et si jamais y'a encore de la place tu prend le reste. auto-fit = tu me met autant de colonne possible tant que ça rentre dedans
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;  /* Centre les éléments horizontalement */
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    overflow-y: scroll; // du coup le contenu qu'on a cacher avec overflow-y hidden dans le composant parent main, ici ont le rend scroll pour pouvoir y acceder en scrollant
   
`;

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
