import styled from "styled-components";
import { theme } from "../../../../../theme";
import { BASKET_MESSAGE } from "../../../../../api/product";

export default function EmptyBasket({ isLoading }) {
  const basketEmptyMessage = BASKET_MESSAGE.EMPTY;
  const basketLoadingMessage = BASKET_MESSAGE.LOADING;

  return (
    <EmptyBasketStyled><span className="empty-message">{isLoading ? basketLoadingMessage : basketEmptyMessage}</span></EmptyBasketStyled>
  )
}

const EmptyBasketStyled = styled.div`
  flex : 1;    // en ecrivant cela, c'est comme avec grid il prendre tout le reste de l'espace disponible
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};

  .empty-message{
    display: flex;
    height: calc(95vh - 10vh - 70px - 70px);   // place le span bien au milieu de la vid commente pour voir
    text-align: center;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    line-height: 2;
    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;


