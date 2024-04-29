import Logo from "../../reusable-ui/Logo";
import RightSide from "./RightSide";
import styled from "styled-components";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <Logo/>
            <RightSide username={username}/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
  /* background: #F5F5F7;
  width: 1200px;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: space-between; */
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;   // pour gerer l'espace des element à l'interieur de la nav(comme expliquer ont fait ça avec le parent pour ne pas modifier le composant reutilisable voir maquette figma il y'a 20px d'espace entre logo et le debut de nav et l'autre div a un peu plus)
    /* align-items: center; */
`;
