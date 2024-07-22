import styled from "styled-components";
import { theme } from "../../../../../theme";
import { MdDeleteForever } from "react-icons/md";


export default function BasketCard({ title, image, price, quantity, onDelete }) {
  return (
    <BasketCardStyled>
        <div className="image"><img src={image} alt={title} /></div>
        <div className="text-info">
            <div className="left-info">
                <span>{title}</span>
                <p>{price}</p>
            </div>
            <span className="quantity">x {quantity}</span>
        </div>
        <div className="delete-button"><MdDeleteForever onClick={onDelete} className="svg"/></div>
    </BasketCardStyled>
  )
}

const BasketCardStyled = styled.div`
  display: flex;
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
  }

  .image{
    margin-top: 8px;
    margin-left: 16px;
    width: 85.8px;
    height: 70px;

    img {        // ce code la redimensionne une image trop grande
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-info{
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 70px;
    padding: 0px 20px 0px 21px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 16px;
  }

  .left-info{
    width: 119.14px;
    height: 70px;
    padding: 5px 21.14px 8px 0px;
    // ces 3 propriete ci desous doivent etre sur l'element parant/le conteneur pour que ça fonctionne
    white-space: nowrap; /* Empêche le texte de se diviser en plusieurs lignes */
    overflow: hidden; /* Masque tout le contenu qui dépasse les limites de l'élément */
    text-overflow: ellipsis; /* Ajoute des points de suspension au texte tronqué */

    span{
        width: 98px;
        height: 32px;
        font-family: "Amatic SC", cursive;
        font-weight: ${theme.fonts.weights.heavy};
        color: ${theme.colors.dark};
    }

    p{
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
  }

  .quantity{
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
    }

    .svg{
        width: 24px;
        height: 24px;
        margin-top: 31px;
        margin-left: 26px;
        color: white;
    }
  }
`;
