import styled from "styled-components";
import { theme } from "../../theme";

export default function SelectInput({value, options, name, Icon, className, id, onChange, onFocus ,onBlur}) {
    return (
        <SelectInputStyled className={className}>
            {Icon && <div className="icon">{Icon}</div>}
            <select name={name} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} id={id} >
                {options.map(({ optionValue, label }) => (
                    <option key={label} value={optionValue}>
                        {label}
                    </option>
                ))}
            </select>
        </SelectInputStyled>
        // <SelectInputStyled value={value} name={name} className={className} id={id} onChange={onChange} onFocus={onFocus} onBlur={onBlur}>
        //       {options.map(({ value, label }) => (
        //       <option key={label} value={value}>{label}</option>
        //       ))}
        // </SelectInputStyled>
    )
}

const SelectInputStyled = styled.div`      // balise select, c'est pas une balise input c'est diffèrent, finalement on a utiliser une div qui contient une div avec l'icone et le select qui contient les options
  /* border: 1px solid red; */
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    /* border: 1px solid red; */
    font-size: ${theme.fonts.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex; // centre verticalement l'icone dans le champ select
  }

  select {
    /* border: 1px solid blue; */
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }
`; // Commente/décommente une ligne CSS pour connaitre son effet sur le composant
  

// Attention à deux props "value":
// 1: value dans <select/> (valeur selectionnée(dans fakeMenu)) ==> onChange est lié à cette value
// 2: value dans <option/> (valeur disponible(dans le fichier select))
// const options = [
//   {optionValue: "", label: "", selected: true},
//   {optionValue: "", label: "", selected: false},
// ] 
