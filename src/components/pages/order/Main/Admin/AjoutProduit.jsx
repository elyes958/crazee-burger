import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useState } from "react";


export default function AjoutProduit() {
  // State
  const [imgUrl, setImgUrl] = useState("");

  //Comportements
  const handleChange = (e) => {
    setImgUrl(e.target.value);
  };

  // Affichage  
  return (
    <AjoutProduitStyled action="AJOUTER UN PRODUIT">
          <div className="divImg">{imgUrl ? <img src={imgUrl} alt="Produit" /> : <p>Aucune Image</p>}</div>
          <div className="formAndButton">
              <div>
                  <FaHamburger />
                  <input type="text" placeholder="Nom du produit (ex: Super Burger)" />
              </div>
              <div>
                  <BsFillCameraFill />
                  <input onChange={handleChange} value={imgUrl} type="url" name="image" id="" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" />
              </div>
              <div>
                  <MdOutlineEuro />
                  <input type="text" placeholder="Prix" />
              </div>
              <button type="submit">Ajouter un nouveau produit au menu</button>
          </div>
    </AjoutProduitStyled>
  )
}

const AjoutProduitStyled = styled.form`
   display : grid;
   grid-template-columns: 215px 645px;
   gap: 20px;
   margin-top: 31px;
   margin-left: 71px;

   input{
    width: 577px;
    height: 19px;
    padding: 1px 2px 1px 2px;
    border: none;
    background-color: #F5F5F7;
   }
   button{
    width: 275px;
    height: 34px;
    top: 129px;
    left: 235px;
    border: 1px;
    border-radius: 5px;
    padding: 10px 29px 9px 29px;
    background: #60BD4F;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
   }
   .divImg{
    width: 215px;
    height: 120px;
    top: -1px;
    border: 1px #E4E5E9 solid;
    border-radius: 5px;
    /* padding: 48px 55px 48px 53px; */
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #93A2B1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; // pour que l'image ne depasse pas de la div
   }
   .formAndButton{
    display: grid;
    gap: 8px; // du couppas besoin de cree des colonne/row pour utiliser gap, display grid suffit

    div{
        width: 645px;
        height: 35px;
        padding: 8px 16px 8px 24px;
        border: #F5F5F7;
        border-radius: 5px;
        background-color: #F5F5F7;

        svg{
            margin-right: 13px;
        }
    }
   }
`;
