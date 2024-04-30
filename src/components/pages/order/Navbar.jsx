import { theme } from "../../../theme";
import { refreshPage } from "../../../utils/window";
import Logo from "../../reusable-ui/Logo";
import RightSide from "./RightSide";
import styled from "styled-components";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            {/* <Logo className={"logo-order-page"} onClick={() => window.location.reload()} /> */}
            <Logo className={"logo-order-page"} onClick={refreshPage} />
            <RightSide username={username}/>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;   // pour gerer l'espace des element à l'interieur de la nav(comme expliquer ont fait ça avec le parent pour ne pas modifier le composant reutilisable voir maquette figma il y'a 20px d'espace entre logo et le debut de nav et l'autre div a un peu plus)
    border-top-left-radius: ${theme.borderRadius.extraRound};  // uniquement le coin haut gauche
    border-top-right-radius: ${theme.borderRadius.extraRound};
    /* align-items: center; */
    .logo-order-page{
        cursor: pointer;
    }
`;
