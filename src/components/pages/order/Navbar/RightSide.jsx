import styled from "styled-components";
import Profile from './Profile';
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { ToastContainer, toast } from "react-toastify"; // librairie react-tostify voir le site
import "react-toastify/dist/ReactToastify.css";     // le style de la librairie 
import { theme } from "../../../../theme";
import { useState } from "react";

export default function RightSide({ username }) {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false); // on initialise à false pour que quand on recharge la page le mode Admin soit desactivé ce que l'on veut sur notre ticket


  // Comportement
  const notify = () => {
    if(!isModeAdmin){
      toast.info("Mode admin activé", {           // toast.info ça vien direct de la librairie(= afficher une info toast) c'est quand tu choisit le type sur la page d'accueil
        // icon: <FaUserSecret size={30} />, // une icone qui vient de react icons
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);   // quoi qu'il arrive on change le state au clic(de true à false et inversement)
  }


 //affichage
  return (
      <RightSideStyled>
          <ToggleButton 
          labelIfUnchecked="ACTIVER LE MODE ADMIN" 
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
          // couleurDuBackground={"green"} props via style components
          // couleurDuText={"blue"}
          onToggle={notify}               // onToggle est un evenement de Js comme on  Click
          />
          <Profile username={username} className={"profile"} />
          <ToastContainer className="toaster" bodyClassName="body-toast" />
          {/* pareil on a recup les 2 classe dans le fichier NavbarRightSideIncomplet.js avec le css en bas */}
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

      // ligne 49 à 66, ce sont les class du toaster quand on fait inspecter dessus on les vois dans le navigateur(on la recup dans le fichier NavbarRightSideIncomplet.js)
      .toaster {
      max-width: 300px;
      }

      .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
      background: ${theme.colors.background_dark};
      }

      .body-toast {
        .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
        margin-right: 20px;
        margin-left: 5px;
      }
      div {
        line-height: 1.3em;
      }
    }
`;
