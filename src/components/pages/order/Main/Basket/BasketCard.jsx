import styled, { css } from "styled-components";
import { theme } from "../../../../../theme";
import { MdDeleteForever } from "react-icons/md";


export default function BasketCard({ title, image, price, quantity, onDelete, isModeAdmin }) {
  return (
    <BasketCardStyled isModeAdmin={isModeAdmin} >
        <div className="delete-button" onClick={onDelete}>
            <MdDeleteForever className="icon"/>
        </div>
        <div className="image">
            <img src={image} alt={title} />
        </div>
        <div className="text-info">
            <div className="left-info">
                <div className="title">
                    <span>{title}</span>
                </div>
                <span className="price">{price}</span>
            </div>
            <div className="quantity">
                <span>x {quantity}</span>
            </div>
        </div>
    </BasketCardStyled>
  )
}

const BasketCardStyled = styled.div`
    box-sizing: border-box;
    height: 86px;
    padding: 8px 16px;
    display: grid;
    grid-template-columns: 30% 1fr;

    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.cardBasket};

    position: relative;

    .image {
        box-sizing: border-box;
        height: 70px;
        img {
            padding: 5px;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }

    .text-info {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 70% 1fr;
        font-size: ${theme.fonts.size.P0};
        color: ${theme.colors.primary};

        .left-info {
            display: grid;
            grid-template-rows: 60% 40%;
            margin-left: 21px;

            .title {
            display: flex;
            align-items: center;
            font-family: ${theme.fonts.family.stylish};
            font-size: ${theme.fonts.size.P3};
            line-height: 32px;
            font-weight: ${theme.fonts.weights.bold};
            color: ${theme.colors.dark};
            // sans cette div avec "min-width: 0", l'ellipsis ne fonctionne pas dans un span
            min-width: 0;
            span {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        .price {
            font-size: ${theme.fonts.size.SM};
            font-weight: ${theme.fonts.weights.medium};
            font-family: ${theme.fonts.family.openSans};
        }
      }
        


        .quantity {
        box-sizing: border-box;
        font-weight: ${theme.fonts.weights.medium};
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 20px;
        font-size: ${theme.fonts.size.SM};
       }
    }


    .delete-button {
        display: none;
        z-index: 1;
    }

    ${(props) => props.isModeAdmin && hoverableStyle}

   // à partir de la c'est le css que j'avais fait moi
  /* display: flex;
  flex-direction: row;
  width: 318px;
  height: 86px;
  margin: 20px 16px;
  border-radius: 5px;
  background-color: ${theme.colors.white};
  &:hover{
    .quantity{
        display: none;
    }
    .delete-button{
        display: block;
    }
  } */

  /* .image{
    margin-top: 8px;
    margin-left: 16px;
    width: 85.8px;
    height: 70px; */

    /* img {        // ce code la redimensionne une image trop grande */
      /* width: 100%;
      height: 100%;
      object-fit: contain;
    }
  } */

  /* .text-info{
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 70px;
    padding: 0px 20px 0px 21px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 16px;
  } */

  /* .left-info{
    width: 119.14px;
    height: 70px;
    padding: 5px 21.14px 8px 0px; */
    // ces 3 propriete ci desous doivent etre sur l'element parant/le conteneur pour que ça fonctionne
    /* white-space: nowrap; Empêche le texte de se diviser en plusieurs lignes */
    /* overflow: hidden; Masque tout le contenu qui dépasse les limites de l'élément */
    /* text-overflow: ellipsis; Ajoute des points de suspension au texte tronqué */

    /* span{
        width: 98px;
        height: 32px;
        font-family: "Amatic SC", cursive;
        font-weight: ${theme.fonts.weights.heavy};
        color: ${theme.colors.dark};
    } */

    /* p{
        margin-top: 5px;
        margin-bottom: 8px;
        width: 43px;
        height: 20px;
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 20.43px;
        color: #ffa01b;
    }
  } */

  /* .quantity{
    margin-top: 25px;
  }

  .delete-button{
    display: none;
    width: 76px;
    height: 86px;
    border-radius: 0px 5px 5px 0px;
    background-color: #e25549;
    &:hover{
        cursor: pointer;
        .svg{
            color: black;
        }
    } */

    /* .svg{
        width: 24px;
        height: 24px;
        margin-top: 31px;
        margin-left: 26px;
        color: white;
    }
  } */
`;

const hoverableStyle = css`
   &:hover {
      .delete-button {
        border: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 76px;
        border-top-right-radius: ${theme.borderRadius.round};
        border-bottom-right-radius: ${theme.borderRadius.round};
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${theme.colors.red};
        color: ${theme.colors.white};
        cursor: pointer;

        .icon {
            width: ${theme.fonts.size.P3};
            height: ${theme.fonts.size.P3};
        }

        &:hover {
           .icon {
              color: ${theme.colors.dark};
          }
        }
      }
    }
` 
