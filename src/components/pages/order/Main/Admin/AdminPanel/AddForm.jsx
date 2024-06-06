import { useContext, useState } from "react";
import styled from "styled-components";
import AdminContext from "../../../../../../context/AdminContext";

const EMPTY_PRODUCT = {
    id          : "",
    title       : "",
    imageSource : "",
    price       : 0,
}

export default function AddForm() {
  // du coup ont peu egalement faire passer des comportement via le context en le remontant tout en haut dans le composant parent comme on a fait ci dessus
  const { handleAdd } = useContext(AdminContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);  // plus propre de l'envoyer comme ça

  // Comportements
  const handleSubmit = (event) => { 
    event.preventDefault();

    const newProductToAdd = { 
        // title: newProduct.title,
        // imageSource: newProduct.imageSource,
        // price: newProduct.price,
        // plus simple d'ecrire comme ça ligne 26
        ...newProduct,
        id: new Date().getTime(),
     }

    handleAdd(newProductToAdd); 
   } 

   // Quand un evenement est lie a une balise html, l'evenement contient la balise au niveau de la propriete targer event.target(tout ce qui est associe à la balise)
   const handleChange = (event) => { 
    console.log("event.target.value", event.target.value);
    console.log("event.target", event.target);
    const newValue = event.target.value;
    const name     = event.target.name;
    setNewProduct({ ...newProduct, [name] : newValue });
   }
   // ligne 37: [name] = nom de propriete dynamique en JS(dynamic property name en anglais)

  // Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
        <div className="image-prewiew">ImagePrewiew</div>
        <div className="input-fields">
            <input name="title" value={newProduct.title} type="text" placeholder="Nom" onChange={handleChange} />
            <input name="imageSource" value={newProduct.imageSource} type="text" placeholder="Image URL" onChange={handleChange} />
            <input name="price" value={newProduct.price ? newProduct.price : ""} type="text" placeholder="Prix" onChange={handleChange} />
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

// sinon pour generer les id il y'a la librairie uuid ou encore plus simple une methode natif à javascript ex: id : crypto.randomUUID() cet methode va generer un id unique

