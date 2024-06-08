import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({value, onChange, icon, ...restProps}) {
    // console.log("restProps: ", restProps);
  return (
      <InputStyled>
          <div className="icon">{icon && icon}</div>
          <input type="text"
              value={value}
              onChange={onChange}
              {...restProps}
          />
      </InputStyled>
  )
}
// ligne 3 ont a recuperer les props via le destructuring, ont aurais pu egalement passer props en param et faire props.inputValue et props.handleChange
// ...restProps = le reste des props toutes les autres props qu'ont aura passer via notre composant Input, restProps est un objet qui contiendra toute les autre props comme placeholder par exemple. cet objet resProps sera destructuré
// restProps est un objet qu'on va vouloir destructuré comme ça {...restProps} et en faisant ça ont pourra recuperer toute les props restante de ...restProps
// on precise value et onChange "pour les rendre obligatoire, au minimum ces 2 la"
// par contre cet technique la n'est pas tres securise je crois tu peu simplement passer les props comme avec value et onChange ça marche aussi

const InputStyled = styled.div`
        /* border: 1px solid red; */
        background-color: #fff;
        border-radius: ${theme.borderRadius.round};
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;
        .icon{
            font-size: ${theme.fonts.size.SM};
            margin-right: 8px;
            color: ${theme.colors.greySemiDark};
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${theme.fonts.size.SM};
            margin-left: 10px;
        }

        input{
            border: none;
            font-size: ${theme.fonts.size.SM};
            color: ${theme.colors.dark};
            width: 100%;

            &::placeholder {
            background: ${theme.colors.white};
            color: ${theme.colors.greyMedium};
        }
        
        }

`;