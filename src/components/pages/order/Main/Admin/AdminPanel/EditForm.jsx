import styled from "styled-components";
import { useContext, useRef, useState } from "react";
import AdminContext from "../../../../../../context/AdminContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";
import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../hooks/useDisplaySuccessMessage";


export default function EditForm() {
  // state
  const { productSelected, setProductSelected, handleEdit, titleEditRef, handleEditInBasket, basket, username } = useContext(AdminContext);
  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted : isSaved, displaySuccessMessage } = useSuccessMessage(); // :isSaved = je renomme le isSubmitted que je récupère dans useSuccessMessage en isSaved. ICI on importe le customHooks useDisplaySuccessMessage et ont extrait avec le destructuring ce qu'il nous return en sachant qu'il nous le return sous forme d'objet

  // Comportement (gestionnaire d'évenement ou "event handler")
  const handleChange = (event) => { 
    const { name, value } = event.target

    let productBeingUpdated = {
        ...productSelected,
        [name] : value,
    }

    setProductSelected(productBeingUpdated); // cet ligne update le formulaire
    handleEdit(username, productBeingUpdated);   // cet ligne update le menu

    let inBasket = basket.find((product) => product.id === productBeingUpdated.id);
    console.log("inBasket: " , inBasket); // faire clg comme ça pour afficher le contenu d'un objet

    // nous permet d'eviter le bug qui met la quantité du basket à 0 quand ont le modifie en cliquant sur le menu
    const productBeingUpdatedInBasket = {
      ...productBeingUpdated,
      quantity : inBasket.quantity,
      price    : replaceFrenchCommaWithDot(productBeingUpdated.price),   // cet ligne me regle le probleme du calcul du prix quand je modifie a partir du menu avec un chiffre à , ex: 1,4
    }

    handleEditInBasket(productBeingUpdatedInBasket);    // cet ligne update le basket
  }

  const handleOnFocus = (event) => {
    const inputvalueOnFocus = event.target.value;
    setValueOnFocus(inputvalueOnFocus);
    console.log("inputvalueOnFocus", inputvalueOnFocus);
  }

  const handleonBlur = (event) => {
    const valueonBlur = event.target.value;
    if (valueOnFocus !== valueonBlur) {
      console.log("ça a changé !");
      displaySuccessMessage();
    }
    console.log("handleonBlur", valueonBlur);
  }

  // Affichage
  return(
    // <EditFormStyled>
    //   <ImagePrewiew newProduct={productSelected} title={productSelected} />
    //   <div className="input-fields">
    //     {inputTexts.map((input) => (
    //       <TextInput
    //         key={input.id}
    //         name={input.name}
    //         value={input.value}
    //         placeholder={input.placeholder}
    //         onChange={handleChange}
    //         icon={input.Icon}
    //         version="minimalist"
    //         ref={input.name === "title" ? titleEditRef : null}
    //       />
    //     ))}
    //   </div>
    //   <div className="submit">
    //     <EditInfoMessage/>
    //   </div>
    // </EditFormStyled>
    <Form 
    product={productSelected}
    onChange={handleChange}
    onFocus={handleOnFocus}  // permet de recuperer la valeur quand on est sur le focus
    onBlur={handleonBlur}     // permet de recuperer la valeur quand on sort du focus
    ref={titleEditRef}
    >
    {isSaved ? <SavingMessage/>  : 
    <EditInfoMessage/>
    }
    </Form>
  )
  // ligne 43 comme className et style ont est obliger d'utiliser une ternaire sinon ça fait des bugs, pas de && ici
  // ligne 86 isSaved ne vas rester à true que pendant 2 secondes(voir la fct displaySuccessMessage) et donc le composant SavingMessage ne va s'afficher que pdt ce temps la

  // Ce que j'ai fait moi
  // const cardToModify = menu.find((card) => card.id === idEditCard);

  // const handleChange = (event) => {
  //   console.log(event.target);
  //   console.log(event.target.value);
  //   console.log(event.target.name);
  //   const newValue = event.target.value;
  //   const name     = event.target.name;
  //   cardToModify[name] = newValue;

  //   handleModify(idEditCard, cardToModify)
  // }

  // if(idEditCard === null){
  //   return (
  //     // <EditFormStyled>
  //     //   CLIQUER SUR UN PRODUIT POUR LE MODIFIER <HiCursorClick />
  //     // </EditFormStyled>
  //     <HintMessage/>
  //   )
  // } else {
  //   return (
  //     <EditFormStyled>
  //         <ImagePrewiew newProduct={cardToModify} />
  //         <div>
  //             <TextInput onChange={handleChange} name="title"       value={cardToModify.title}       icon={<FaHamburger/>} />
  //             <TextInput onChange={handleChange} name="imageSource" value={cardToModify.imageSource} icon={<BsFillCameraFill/>}/>
  //             <TextInput onChange={handleChange} name="price"       value={cardToModify.price}       icon={<MdOutlineEuro/>} />
  //         </div>
  //         <span className="txt">Cliquer sur un produit du menu pour le modifier <u>en temps réel</u></span>
  //     </EditFormStyled>
  //   )
  // }
  
}

const EditFormStyled = styled.form`
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

  }
`;





// Ce que j'ai fait moi
// const EditFormStyled = styled.div`
//   font-family: "Amatic SC", cursive;
//   display: grid;
//   grid-template-columns: 1fr 3fr;
//   grid-template-rows: repeat(4, 1fr);
//   height: 100%;
//   width: 70%;
//   grid-column-gap: 20px;
//   grid-row-gap: 8px;

//   .txt{
//     color: ${theme.colors.primary};
//     font-family: "Open Sans", sans-serif;
//   }
// `;
