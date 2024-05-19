import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formatPrice } from "../../../../utils/maths";
import Menu from "./Menu";

export default function Main() {
  // State
  // const [data, setData] = useState(fakeMenu2);

  // Comportements
  // moi j'ai fait comme belivemy en passant par une const, lui il a direct map à partir du tableau du state voir composant Menu
  // const affichage = data.map((element) => {
  //   return(
  //     <div className="carte">
  //       <img src={element.imageSource} alt="image" />
  //       <div>
  //         <h3>{element.title}</h3>
  //         <div className="priceButton">
  //           <div>
  //               <span>{formatPrice(element.price)}</span> 
  //           </div>
  //           <button>Ajouter</button>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // });


  // Affichage
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu/>
        <div className="admin">Admin</div>
      </div>
      {/* {affichage} */}
    </MainStyled>
  )
}

const MainStyled = styled.main`
    border: 3px solid green;
    background: ${theme.colors.background_white};
    height: calc(95vh - 10vh);  //on peu egalement faire ce qu'on a fait ligne 58 comme ça, mais la 2eme methode avec flex:1 parai plus simple*/ 
    /* flex: 1;  // quand on utilise flexbox cela permet de dire à l'element de prendre toute la place restante (ici dans notre container du coup notre main va bien j'usqu'a en bas) */
    border-bottom-left-radius: ${theme.borderRadius.extraRound};  // uniquement le coin en bas à gauche
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    // ont aurait pu egalement juste coller le border radius du ticket 0 0 15 15 = en bas a droite et a gauche pour les 2 15px
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    display: grid;
    /* grid-template-columns: repeat(4, 240px); */
    grid-template-columns:  1fr;
    /* grid-column-gap: 85px; */
    /* grid-template-rows: repeat(4, 330px); */
    /* grid-row-gap: 60px; */
    /* padding: 50px 50px 150px;  // avec le padding ça marche, le margin que j'ai mis sur les éléments provoquer des erreurs ça ne fonctionner pas */
    /* overflow-y: scroll;  // pour que notre grille et nos elements ne depasse pas du container */

   /* .basket{
    background: pink;
   }  */

   .menu-and-admin{
    position: relative;
    overflow-y: hidden;  // le contenu qui depasse sur l'axe y don en hauteur on le met hidden car on veut qu'il soit cacher
    display: grid;  // en mettant ça en plus du overflow: scroll dans l'enfant ça fonctionne je ne sais pas pourquoi à chercher(meme sur la video F07 il a dit il sais pas pk)
    border-bottom-left-radius: ${theme.borderRadius.extraRound}; 
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    
    .admin{
    background: red;
    height: 250px;
    // ces 4 propriete en dessous permette de prendre tout l'espace disponible de gauche à droite et de haut en bas
    position: absolute;
    // la position absolute d'un élement il va sortir du flow de tous les elements parents, et il va avoir en référent le premier element parent qu'il rencontre qui a la position relative si il y'en a pas alors par default c'est l'ecran. nous on veut que le premier element parent qui a la position relative soit : div className="menu-and-admin" 
    bottom: 0;
    left: 0;
    right: 0;
   }

   }
   

   /* h3{
    font-family: "Amatic SC";
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.P4};
    margin: 20px 20px 0px 20px;
   } */

   /* div img {
    width: 200px;
    height: 145px; */
    /* object-fit: cover;  Empêche l'image de se déformer et la fait remplir le conteneur */
    /* margin: 50px 20px 0px 20px;
   } */

   /* .carte{
    display: flex;
    flex-direction: column;
    justify-content: center; */
    /* align-items: center; */
    /* box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
   } */

  /* .priceButton{
    display: flex;
    justify-content: space-around;
    align-items: center;
  } */

  /* .priceButton span{
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};
  }

  .priceButton div{
    padding: 22px, 50px, 22px, 0px;
  } */

  /* .priceButton button{
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    outline: none; // sert a enlever la bordure par default qui apparai au clic
    transition: background 0.3s ease; // effet de transition progresive du changement de background
    &:hover{   // = au survol
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
    }
    &:active{  // = au clic
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    
  } */
  
`;
