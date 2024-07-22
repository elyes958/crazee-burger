import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket.jsx";
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";
import BasketCompleted from "./BasketCompleted";


export default function Basket() {
  const {basket} = useContext(AdminContext);

  let totalPrice = 0;

  for (let i = 0; i < basket.length; i++) {
    totalPrice += (basket[i].price * basket[i].quantity);
  }

  // Affichage
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(totalPrice)}/>
        {basket.length > 0  ? <BasketCompleted/> : <EmptyBasket/>}
        <Footer/>
        {/* <div className="ttc">
          <div>
              <span>TOTAL</span>
              <span>0,00 €</span>
          </div>
        </div>
        <p>VOTRE COMMANDE EST VIDE</p>
        <div className="footer"><span>Codé avec ❤️ et React.JS</span></div> */}
    </BasketStyled>
  )
}

const BasketStyled = styled.div`

    background: pink;
    display: flex;
    flex-direction: column;
    overflow: hidden; // ont cache ce qui depasse du panier en mettant hiden sur le parent puis on le rend visible au scroll en utilisant overflow: scroll sur l'enfant
    
    
    /* border: 1px solid red;
    height: 834,69px;
    border-radius: 0px 0px 0px 15px;
    color: #f5f5f7;

    p{
      width: 264px;
      height: 72px;
      margin-top: 311.34px;
      margin-left: 42.38px;
      margin-bottom: 311.35px;
      font-family: "Amatic SC", cursive;
      font-weight: ${theme.fonts.weights.regular};
      font-size: ${theme.fonts.size.P4};
      line-height: 72px;
      text-align: center;
      color: #747b91;
    }

    .ttc{
    background-color: #292729;
    height: 70px;
    padding: 0px 16px 0px 16px;
    div{
      width: 318px;
      display: flex;
      justify-content: space-between;
      padding: 12px 1.87px 13px 0px;
      span{
        color: #FFA01B;
        font-family: "Amatic SC", cursive;
        font-weight: ${theme.fonts.weights.regular};
        font-size: ${theme.fonts.size.P4};
        line-height: 45px;
        letter-spacing: 2px;
      }
    }
   }

    .footer{
    height: 70px;
    border-radius: 0px 0px 0px 15px;
    background-color: #292729;
    color: #ffffff;
    font-family: "Amatic SC", cursive;
    line-height: 25.22px;
    font-size: ${theme.fonts.size.P2};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
   } */
`;


