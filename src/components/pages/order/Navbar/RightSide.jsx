import styled from "styled-components";
import Profile from './Profile';
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function RightSide({ username }) {


 //affichage
  return (
      <RightSideStyled>
          <ToggleButton 
          labelIfUnchecked="ACTIVER LE MODE ADMIN" 
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
          />
          <Profile username={username} className={"profile"} />
      </RightSideStyled>
  )
}


const RightSideStyled = styled.div`
      display: flex;
      align-items: center;
      padding-right: 50px; // encore une fois ont gere les espace des element d'un container directement avec leur parent voir maquette figma du projet, ont avait deja mis 20 px de padding sur le parent de ce composant donc pour l'enfant de ce composant ont a plus qu'a lui rajouter 50px

      .profile{
        /* background: red; */
        padding-left: 50px;
      }
`;
