import styled from "styled-components";
// import { TextInput } from "../../../../../reusable-ui/TextInput"; //ctrl shift H pour importe le lien toi meme(ici mon erreur a etait de l'importer entre {} on fait pas ça quand on importe un composant)
import TextInput from "../../../../../reusable-ui/TextInput.jsx";
import ImagePrewiew from "./ImagePrewiew.jsx";
import { getInputTextsConfig } from "./inputTextConfig.jsx";
import React from "react";




const Form = React.forwardRef(({product, onSubmit, onChange, children, onFocus, onBlur}, ref) => {
   
  const inputTexts = getInputTextsConfig(product);


  // Affichage
  return (
    <FormStyled onSubmit={onSubmit}>
        <ImagePrewiew newProduct={product} />
        <div className="input-fields">
          {inputTexts.map((input) => (
             <TextInput
              key={input.id}
              name={input.name}
              value={input.value} 
              placeholder={input.placeholder} 
              onChange={onChange}
              icon={input.Icon}
              version="minimalist"
              onFocus={onFocus}
              onBlur={onBlur}
              ref={ref && input.name === "title" ? ref : null}
              />
            ))}
          {/* <TextInput
             name="title" 
             value={newProduct.title} 
             type="text" 
             placeholder="Nom du produit (ex: Super Burger)" 
             onChange={handleChange}
             icon={<FaHamburger/>}
            //  className={"inputDuAddForm"}
             version="minimalist"
          />
          <TextInput 
            name="imageSource" 
            value={newProduct.imageSource} 
            type="text" 
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" 
            onChange={handleChange}
            icon={<BsFillCameraFill/>}
            // className={"inputDuAddForm"}
            version="minimalist"
          />
          <TextInput 
            name="price" 
            value={newProduct.price ? newProduct.price : ""} 
            type="text" 
            placeholder="Prix" 
            onChange={handleChange}
            icon={<MdOutlineEuro/>}
            // className={"inputDuAddForm"}
            version="minimalist"
          /> */}
        </div>
        <div className="submit">{children}</div>
    </FormStyled>
  )
})
export default Form;
// ligne 66 on affiche le button seulment si on recoit le props onSubmit(si on a un button on a forcement l'evenement onSubmit) de l'evenement onSubmit car l'autre onglet(modifier n'a pas besoin de ce button mais affiche simplement un message)

const FormStyled = styled.form`
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

