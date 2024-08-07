import styled, { css } from "styled-components";
import { theme } from "../../theme";
import React from "react";

// React.forwardRef doit etre utiliser avec une fct fléches dans une const et non une fct classique
const TextInput = React.forwardRef(({value, onChange, icon, className, version = "normal", ...restProps}, ref) => {
    // console.log("restProps: ", restProps);
  return (
      <TextInputStyled className={className} version={version}>
          <div className="icon">{icon && icon}</div>
          <input type="text"
              value={value}
              onChange={onChange}
              {...restProps}
              ref={ref}
          />
      </TextInputStyled>
   )
 }
)
export default TextInput;
// ligne 3 ont a recuperer les props via le destructuring, ont aurais pu egalement passer props en param et faire props.inputValue et props.handleChange
// ...restProps = le reste des props toutes les autres props qu'ont aura passer via notre composant Input, restProps est un objet qui contiendra toute les autre props comme placeholder par exemple. cet objet resProps sera destructuré
// restProps est un objet qu'on va vouloir destructuré comme ça {...restProps} et en faisant ça ont pourra recuperer toute les props restante de ...restProps
// on precise value et onChange "pour les rendre obligatoire, au minimum ces 2 la"
// par contre cet technique la n'est pas tres securise je crois tu peu simplement passer les props comme avec value et onChange ça marche aussi

// ligne 4 quand on met = dans une props ou un param d'une fct (c du Javascript) c'est comme ci on lui met une valeur par default au ca ou il y'en aurais pas, si on passe une autre valeur c'est celle ci qui sera appliquer

const TextInputStyled = styled.div`
        /* border: 1px solid red; */
        /* background-color: ${theme.colors.white}; */
        border-radius: ${theme.borderRadius.round};
        display: flex;
        align-items: center;
        padding: 18px 24px;
        /* margin: 18px 0; */
        
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

        /* ${(props) => (props.version === "normal" && extraNormalStyle)};
        ${(props) => (props.version === "minimalist" && extraMinimalistStyle)}; */

        // Refacto
        /* ${(props) => {
            if (props.version === "normal") return extraNormalStyle
            if (props.version === "minimalist") return extraMinimalistStyle
        }} */

        // ligne 100
        ${(props) => extraStyle[props.version]}
        // on peu meme destructurer props en faisant {version} pour extraire directement version et eviter d'ecrire props.version
        // rappel les [] sur un objet = ont veu acceder à la valeur d'une propriete dynamiquement car on ne sais pas à l'avance laquelle sera passer
`;

// on ajoute ici ce qui differe selon les version, on garde en haut le style qui est commun à tout les textInput
const extraNormalStyle = css`
    background-color: ${theme.colors.white};
    padding: 18px 28px;
    color: ${theme.colors.greySemiDark};

    input {
        color: ${theme.colors.dark};

        &::placeholder {
            background: ${theme.colors.white};
        }
    }
`;

const extraMinimalistStyle = css`
    background-color: ${theme.colors.background_white};
    padding: 8px 16px;
    color: ${theme.colors.greyBlue};

    input {
        background: ${theme.colors.background_white};
        color: ${theme.colors.dark};

        &:focus{
            outline: 0;  // add outline
        }
    }
`;

// exemple du "dictionnaire" refacto utiliser par les dev senior
const extraStyle = {
    normal: extraNormalStyle,
    minimalist: extraMinimalistStyle,
}