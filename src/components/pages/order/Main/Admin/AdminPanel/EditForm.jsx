import styled from "styled-components";
import { useContext } from "react";
import AdminContext from "../../../../../../context/AdminContext";
import ImagePrewiew from "./ImagePrewiew";
import TextInput from "../../../../../reusable-ui/TextInput";
import HintMessage from "./HintMessage";
import { getInputTextsConfig } from "./inputTextConfig";


export default function EditForm() {
  // state
  const { productSelected, setProductSelected, handleEdit } = useContext(AdminContext);

  const inputTexts = getInputTextsConfig(productSelected);

  // Comportement (gestionnaire d'évenement ou "event handler")
  const handleChange = (event) => { 
    const { name, value } = event.target

    const productBeingUpdated = {
        ...productSelected,
        [name] : value,
    }

    setProductSelected(productBeingUpdated); // cet ligne update le formulaire
    handleEdit(productBeingUpdated);            // cet ligne update le menu
  }

  // Affichage
  return(
    <EditFormStyled>
      <ImagePrewiew newProduct={productSelected} title={productSelected} />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            key={input.id}
            name={input.name}
            value={input.value}
            placeholder={input.placeholder}
            onChange={handleChange}
            icon={input.Icon}
            version="minimalist"
          />
        ))}
      </div>
    </EditFormStyled>
  )


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
    
    .submit-button{
      /* width: 50%; */
      height: 100%;
    }
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
