import styled from "styled-components";

export default function Main() {
  return (
    <MainStyled>
            Main
    </MainStyled>
  )
}

const MainStyled = styled.main`
  /* height: 634px;
  width: 1200px;
  background: #F5F5F7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2)inset;
  border-radius: 0px 0px 15px 15px; */
    background: green;
    /* height: calc(95vh - 10vh);  ont peu egalement faire ce qu'on a fait ligne 58 comme ça, mais la 2eme methode avec flex:1 parai plus simple*/ 
    flex: 1;  // quand on utilise flexbox cela permet de dire à l'element de prendre toute la place restante (ici dans notre container du coup notre main va bien j'usqu'a en bas)
`;
