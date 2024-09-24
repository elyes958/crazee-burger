import styled, { css } from "styled-components";

export default function SelectInput({options, className, id}) {
    return (
        <SelectInputStyled name="isAvailable" className={className} id={id}>
              {/* <option value={true}>En stock</option>
              <option value={false}>En rupture</option> */}
              {options.map(({ value, label }) => (
              <option value={value}>{label}</option>
              ))}
        </SelectInputStyled>
    )
}

const SelectInputStyled = styled.select`      // balise select, c'est pas une balise input c'est diffèrent
  border: 1px solid red;
`;
