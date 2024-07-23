import { useContext } from "react";
import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";
import { formatPrice } from "../../../../../utils/maths";
import BasketCard from "./BasketCard";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function BasketProducts() {
  // State
  const {basket, handleDeleteInBasket} = useContext(AdminContext);

  // Comportement
  const handleDelete = (id) => { 
    handleDeleteInBasket(id);
  }

  // Affichage
  return (
    <BasketProductsStyled>
        {basket.map((product) => {
            return(
                <div className="basket-card">
                <BasketCard
                    title={product.title}
                    image={product.imageSource === "" ? IMAGE_BY_DEFAULT : product.imageSource}
                    price={formatPrice(product.price)}
                    quantity={product.quantity}
                    key={product.id}
                    onDelete={() => handleDelete(product.id)}
                />
                </div>
            )
        })}
    </BasketProductsStyled>
  )
}

const BasketProductsStyled = styled.div`
 /* width: 350px;
 height: 694.69px; */
 flex: 1;
 display: flex;
 flex-direction: column;
 overflow-y: scroll; // pour que ça fonctionne il faut mettre overflow: hiden sur l'element parent

 .basket-card {
  margin: 10px 16px;
  height: 86px;
  box-sizing: border-box;
  :first-child {
    margin-top: 20px;
  }
  :last-child{
    margin-bottom: 20px;
  }
 }
`;


