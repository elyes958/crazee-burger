import { useContext } from "react";
import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";
import { formatPrice } from "../../../../../utils/maths";
import BasketCard from "./BasketCard";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function BasketCompleted() {
  // State
  const {basket, handleDeleteInBasket} = useContext(AdminContext);

  // Comportement
  const handleDelete = (id) => { 
    handleDeleteInBasket(id);
  }

  // Affichage
  return (
    <BasketCompletedStyled>
        {basket.map((product) => {
            return(
                <BasketCard
                    title={product.title}
                    image={product.image === "" ? IMAGE_BY_DEFAULT : product.image}
                    price={formatPrice(product.price)}
                    quantity={product.quantity}
                    key={product.id}
                    onDelete={() => handleDelete(product.id)}
                />
            )
        })}
    </BasketCompletedStyled>
  )
}

const BasketCompletedStyled = styled.div`
 width: 350px;
 height: 694.69px;
 overflow-y: scroll; // pour que ça fonctionne il faut mettre overflow: hiden sur l'element parent
`;


