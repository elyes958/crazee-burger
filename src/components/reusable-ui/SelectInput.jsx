import styled from "styled-components";

export default function SelectInput({value, options, name, className, id, onChange}) {
    return (
        <SelectInputStyled value={value} name={name} className={className} id={id} onChange={onChange}>
              {/* <option value={true}>En stock</option>
              <option value={false}>En rupture</option> */}
              {options.map(({ value, label }) => (
              <option key={label} value={value}>{label}</option>
              ))}
        </SelectInputStyled>
    )
}

const SelectInputStyled = styled.select`      // balise select, c'est pas une balise input c'est diffèrent
  border: 1px solid red;
`;
  

// Attention à deux props "value":
// 1: value dans <select/> (valeur selectionnée(dans fakeMenu)) ==> onChange est lié à cette value
// 2: value dans <option/> (valeur disponible(dans le fichier select))
// const options = [
//   {optionValue: "", label: "", selected: true},
//   {optionValue: "", label: "", selected: false},
// ] 
