import Main from "./Main";
import Navbar from "./Navbar";
import styled from "styled-components";

export default function Container() {
  return (
    <Containerstyled>
        <Navbar/>
        <Main/>
    </Containerstyled>
  )
}

const Containerstyled = styled.div`
  height: 95vh;
  width: 1400px;
`;
