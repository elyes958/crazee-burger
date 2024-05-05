import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function NavbarRightSideIncomplet() {
  const notify = () => toast.info("Mode admin activé", {
    // icon: <FaUserSecret size={30} />,
    theme: "dark",
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <NavbarRightSideIncompletStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarRightSideIncompletStyled>
  )
}

const NavbarRightSideIncompletStyled = styled.div`
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
`
