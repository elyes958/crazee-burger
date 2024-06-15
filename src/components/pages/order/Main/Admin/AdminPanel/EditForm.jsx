import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";

export default function EditForm() {
  return (
    <EditFormStyled>
      CLIQUER SUR UN PRODUIT POUR LE MODIFIER <HiCursorClick />
    </EditFormStyled>
  )
}


const EditFormStyled = styled.div`
  font-family: "Amatic SC", cursive;
`;
