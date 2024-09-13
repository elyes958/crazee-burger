import styled, { css } from "styled-components";

export const adminAnimation = css`
  .admin-appear{ // quand on met appear ici ne pas l'oublier de l'ajouter en props de CSSTransition, appear={true}
      opacity: 0.1;
      transform: translateY(100%);
    }
   .admin-appear-active{
        opacity: 1;
        transform: translateY(0);
        transition: all 500ms;
    }
`