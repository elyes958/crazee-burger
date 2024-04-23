import styled from "styled-components";

export default function Input({value, onChange, icon, ...restProps}) {
    // console.log("restProps: ", restProps);
  return (
      <InputStyled>
            {icon}
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
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;
        .icon{
            font-size: 15px;
            margin-right: 8px;
            color: #93a2b1;
        }

        input{
            border: none;
            font-size: 15px;
            color: #17161a;
            width: 100%;
        }

        &::placeholder {
            background: white;
            color: lightgrey;
        }
`;