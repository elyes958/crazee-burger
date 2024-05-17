import styled from "styled-components";

export default function Tab({svg, texte, className, onClick}) {
  return (
    <TabStyled onClick={onClick} className={className}>{svg}{texte}</TabStyled>
  )
}


const TabStyled = styled.button`
  height: 43px;
  border-radius: 5px 5px 0px 0px;
  border: 1px 1px 2px 1px;
  text-align: center;
`;
