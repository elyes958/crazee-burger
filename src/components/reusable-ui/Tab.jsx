import styled from "styled-components";
import { theme } from "../../theme/index.jsx"

export default function Tab({ label, Icon, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
        <div className="icon">{Icon}</div>
        {label && <span className="label">{label}</span>}
    </TabStyled>
  )
}
// ligne 8 on met label dans un span car c'est du texte, par contre span ajoute une marge donc quand pas besoin de label (cas du premier button) on le rend conditionel

const TabStyled = styled.div`
  /* border: 1px solid blue; */
  height: 43px;
  padding: 0 22px;    // bien zoomer sur figma pour voir ça(dans le svg premier button)

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;
  left: 5%;      // pour utiliser une valeur comme ça pour mettre la marge à gauche il faut mettre une position avant ici relative
  top: 1px;

  // fonts
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  // border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-radius: 5px 5px 0px 0px;

  &:hover{    // pseudo classe hover, sans le & l'effet ne fonctionner pas
    border-bottom: 2px solid ${theme.colors.white};
  }

  .icon{
    /* border: 1px solid red; */
    display: flex;
  }

  .label {
    margin-left: 13px;
  }
`;
