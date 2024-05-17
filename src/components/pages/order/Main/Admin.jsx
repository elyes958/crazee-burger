import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";
import styled from "styled-components";

export default function Admin() {
  return (
    <AdminStyled>
        <AdminTabs/>
        <AdminPanel/>
    </AdminStyled>
  )
}


const AdminStyled = styled.div`
  width: 1400px;
  height: 295px;
  border: 1px solid red;
`;
