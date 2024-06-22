import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { useContext } from "react";
import AdminContext from "../../../../../../context/AdminContext";
import ImagePrewiew from "./ImagePrewiew";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../../theme";

export default function EditForm() {
  const { menu, currentTabSelected, idEditCard, handleModify } = useContext(AdminContext);

  const cardToModify = menu.find((card) => card.id === idEditCard);

  const handleChange = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.target.name);
    const newValue = event.target.value;
    const name     = event.target.name;
    cardToModify[name] = newValue;

    handleModify(idEditCard, cardToModify)
  }

  if(idEditCard === null){
    return (
      <EditFormStyled>
        CLIQUER SUR UN PRODUIT POUR LE MODIFIER <HiCursorClick />
      </EditFormStyled>
    )
  } else {
    return (
      <EditFormStyled>
          <ImagePrewiew newProduct={cardToModify} />
          <div>
              <TextInput onChange={handleChange} name="title"       value={cardToModify.title}       icon={<FaHamburger/>} />
              <TextInput onChange={handleChange} name="imageSource" value={cardToModify.imageSource} icon={<BsFillCameraFill/>}/>
              <TextInput onChange={handleChange} name="price"       value={cardToModify.price}       icon={<MdOutlineEuro/>} />
          </div>
          <span className="txt">Cliquer sur un produit du menu pour le modifier <u>en temps réel</u></span>
      </EditFormStyled>
    )
  }
  
}


const EditFormStyled = styled.div`
  font-family: "Amatic SC", cursive;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .txt{
    color: ${theme.colors.primary};
    font-family: "Open Sans", sans-serif;
  }
`;
