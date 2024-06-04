import { useContext } from "react";
import styled from "styled-components";
import AdminContext from "../../../../../../context/AdminContext";

export default function AddForm() {
  const { handleAdd } = useContext(AdminContext)
  // du coup ont peu egalement faire passer des comportement via le context en le remontant tout en haut dans le composant parent comme on a fait ci dessus

  const newProduct = { 
    id: new Date().getTime(),
    title: "Nouveau Produit",
    imageSource: "",
    price: 2.5,
 }

  const handleSubmit = (event) => { 
    event.prevent.Default();
    handleAdd(newProduct);
   } 

  
  return (
    <AddFormStyled onSubmit={handleSubmit}>
        <div className="image-prewiew">ImagePrewiew</div>
        <div className="input-fields">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Image URL" />
            <input type="text" placeholder="Prix" />
        </div>
        <button className="submit-button">Submit button</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-prewiew{
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }
  .input-fields{
    background: blue;
    grid-area: 1 / 2 / -2 / 3;      // grid area d'abord la ligne puis la colonne: 1er valeur ligne 2eme valeur colonne pour coin superieur gauche puis la meme chose pour coin inferieur droit

    display: grid; // il a partager nos 3 element input de maniere egale automatiquement
  }
  .submit-button{
    background: green;
    grid-area: 4 / -2 / -1 / -1;
    width: 50%;

  }
`;

