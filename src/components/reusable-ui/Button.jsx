import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({label, icon, version="normal", onClick, disabled}) {
  return (
      <ButtonStyled version={version} onClick={onClick} disabled={disabled} >
          {/* <Link to={`/order/${inputValue}`}> */}
          <span>{label}</span>
          <div className="icon">{icon && icon}</div>
          {/* </Link> */}
      </ButtonStyled>
  )
}
// si tu survole disabled tu peu voir qu'il prend soit un boolean true ou false soit undefined aucune valeur dans le cas ou on ne l'aurais pas renseigner
// disabled permet de cancel tt les events onClick, onChange etc(en gros tu peu cliker et rien ne va ce passer)

const ButtonStyled = styled.button`
   /* ${(props) => props.version === "normal" && extraStyleNormal};
   ${(props) => props.version === "success" && extraStyleSuccess}; */
   
   ${(props) => extraStyle[props.version]}
`;
// Quand ont rend nos composant reutilisable comme celui la ont fait remonter les props dans le composant parent(tout le specifique quoi) et quand ont lui passe les props(envoie les donnee) ont appelle ça "hydrater un composant"

const extraStyleNormal = css`
width: 100%;
border: 1px solid red;
display: inline-flex;
justify-content: center;
align-items: center;
position: relative;
white-space: nowrap;
text-decoration: none;
line-height: 1;

padding: 18px 24px;
border-radius: 5px;
font-size: 15px;
font-weight: 800;
color: white;
background-color: #ff9f1b;
border: 1px solid #ff9f1b;
cursor: pointer;

&:hover:not(:disabled) {
    background-color: white;
    color: #ff9f1b;
    border: 1px solid #ff9f1b;
    transition: all 200ms ease-out;
}

&:active {
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
}

&:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    z-index: 2;
}

&.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
    }
    &:active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
    }
}

.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
}

`;

const extraStyleSuccess = css`
   cursor: pointer;
   color: ${theme.colors.white};
   background: ${theme.colors.success};
   border: 1px solid ${theme.colors.success};
   border-radius: ${theme.borderRadius.round};
   height: 35px;
   padding: 0 1.5em;
   font-weight: ${theme.fonts.weights.semiBold};
   :hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
   }
   :active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
   }
`;

// utilisation du "dictionnaire"
const extraStyle = {
    normal : extraStyleNormal,
    success : extraStyleSuccess,
}
