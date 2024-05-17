import { useContext } from "react";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";

export default function Admin() {
  // state
  const modeAdmin = useContext(AdminContext);

  if(modeAdmin.isModeAdmin){
    return (
      <AdminStyled>
          <AdminTabs/>
          <AdminPanel/>
      </AdminStyled>
    )
  } else {
    return null;
  }
}


const AdminStyled = styled.div`
  width: 1400px;
  height: 295px;
  border: 1px solid red;
`;
