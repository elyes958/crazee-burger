import { useContext, useState } from "react";
import styled from "styled-components";
import AdminContext from "../../../../../../context/AdminContext";
// import { TextInput } from "../../../../../reusable-ui/TextInput"; //ctrl shift H pour importe le lien toi meme(ici mon erreur a etait de l'importer entre {} on fait pas ça quand on importe un composant)
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js";
import Form from "./Form.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import Button from "../../../../../reusable-ui/Button.jsx";
import { useSuccessMessage } from "../../../../../../hooks/useDisplaySuccessMessage.js";



export default function AddForm() {
  // du coup ont peu egalement faire passer des comportement via le context en le remontant tout en haut dans le composant parent comme on a fait ci dessus
  const { handleAdd, newProduct, setNewProduct } = useContext(AdminContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const {isSubmitted, displaySuccessMessage} = useSuccessMessage() // on l'appelle avec des () car c'est une fonction, useSuccessMessage est notre custom hook, il nous return ici un hook(le state isSubmited) et un comportement

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
    setNewProduct(EMPTY_PRODUCT); // on efface les champ après soumission du formulaire en vidant le state

    displaySuccessMessage(); // on met le code dans une fct(plus clean)
  } 

    const displaySuccessMessage = () => {
        setIsSubmitted(true); // le formulaire a etait soumis donc on passe le state a true pour afficher le message
        setTimeout(() => {      // premier param fct fléché, le 2eme temps en mili secondes
            setIsSubmitted(false)   // instruction qui s'execute au bout de 2000 mili secondes(2 seconde)
        }, 2000)
    }

   // Quand un evenement est lie a une balise html, l'evenement contient la balise au niveau de la propriete target event.target(tout ce qui est associe à la balise)
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
    <Form 
    product={newProduct}
    onSubmit={handleSubmit}
    onChange={handleChange}
    isSubmitted={isSubmitted}
    >
    <>
    <Button
     className="submit-button"
     label={"Ajouter un nouveau produit au menu"}
     version="success"
     />
     {isSubmitted && <SubmitMessage/>}
   </>
   </Form>
  )
}
// ligne 61 les fragments <></> ou React.fragment sont ignoré dans le render du HTML, donc permet d'envoyer plusieurs element par ex en props sans utiliser de div
// ligne 63 notre button entre fragment est un enfant de form donc on rajoute la 2eme balise fermante pour le mettre entre les deux et on le passe à notre composant via le mot cle children de React ce qui nous evite de passer tout ça dans un props ce qui fonctionne aussi, si on change le mot et on ne met pas children ça ne fonctionera pas, childen est un mot cle de react

const AddFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;


  
  .input-fields{
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;      // grid area d'abord la ligne puis la colonne: 1er valeur ligne 2eme valeur colonne pour coin superieur gauche puis la meme chose pour coin inferieur droit

    display: grid; // il a partager nos 3 element input de maniere egale automatiquement
    grid-row-gap: 8px;
  }
  .submit{
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
    
    .submit-button{
      /* width: 50%; */
      height: 100%;
    }
  }
`;

// sinon pour generer les id il y'a la librairie uuid ou encore plus simple une methode natif à javascript ex: id : crypto.randomUUID() cet methode va generer un id unique
// Une custom hook est une fonction qui contient des hooks
