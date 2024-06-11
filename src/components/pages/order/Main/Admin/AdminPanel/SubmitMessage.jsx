import { theme } from "../../../../../../theme";
import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";

export default function SubmitMessage() {
  return (
      <SubmitMessageStyled>
          <FiCheckCircle className="icon" />
          <span className="message">Ajouté avec succés !</span>
      </SubmitMessageStyled>
  )
}

const SubmitMessageStyled = styled.div`
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5px;

      .icon{
        color: ${theme.colors.success};
        margin-left: 10px;
        width: 1em;
        height: 1em;
        border: 1px solid ${theme.colors.success};
        border-radius: 50%;
        vertical-align: middle;
      }
      .message{
        margin-left: 5px;
        font-size: ${theme.fonts.size.SM};
        color: ${theme.colors.success};
      }
`;
