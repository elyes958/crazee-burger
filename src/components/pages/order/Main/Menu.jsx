import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
// import Product from "./Product";

export default function Menu() {
  // state
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled className="menu">
        {menu.map((produit) => {
            return (
            <Card  key={produit.id} title={produit.title} imageSource={produit.imageSource} leftDescription={formatPrice(produit.price)} /> // finalement comme on a rendu notre composant reutilisable et donc qu'on a fait remonter le specifique dans les props, alor on est obliger d'utiliser ça et pas l'autre methode en bas
            // <Card {...produit} />  // meme chose que ligne 5, ecriture bc plus simple spread operator dans un objet, cet methode fonctionne que si vous etes certain que "produit" a tous les élements dont "Product" a besoin. Du coup la methode au dessus est preferable et conseiller.
        )})};
    </MenuStyled>
  )
}


const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(4, 1fr);  // = 4 colonnes avec tout l'espace disponible
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;  /* Centre les éléments horizontalement */
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

   
`;
