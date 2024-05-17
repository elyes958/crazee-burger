import styled from "styled-components";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
        <p>Ajouter un produit</p>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  width: 100%;
  height: 251px;
  border: 1px solid blue;
  background: white;
  p{
    margin-top: 17px;
    margin-left: 21px;
  }
`;
