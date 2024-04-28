import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styled from "styled-components";

export default function Navbar({ username }) {
    return (
        <NavbarStyled>
            <div className="left-side">
                Left
            </div>
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
    /* align-items: center; */

    .left-side{
      background: pink;
    }
`;
