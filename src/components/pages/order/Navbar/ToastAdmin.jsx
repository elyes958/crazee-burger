import { ToastContainer } from "react-toastify"; // librairie react-tostify voir le site
import "react-toastify/dist/ReactToastify.css";     // le style de la librairie 
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function ToastAdmin() {
  return (
    <ToastAdminStyled>
        <ToastContainer className="toaster" bodyClassName="body-toast" />
        {/* pareil on a recup les 2 classe dans le fichier NavbarRightSideIncomplet.js avec le css en bas */}
    </ToastAdminStyled>
  )
}

const ToastAdminStyled = styled.div`
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

