import styled, { css } from "styled-components";
import { theme } from ".";

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

export const basketAnimation = css`
//(phase de mounting du composant on va avoir plusieurs etat appear, enter, exit)(tout ça vient de la librairie react-transition-group qu'on a importés ici)
.animation-basket-appear {           // appear precede l'element enter et enter-active, il ne s'applique que sur le premier element ajouté(ici dans notre basket)
 .card {
   transform: translateX(100px);
   opacity: 0%;
 }
}
.animation-basket-appear-active {
 .card {
   transition: ${theme.animations.speed.quick};
   transform: translateX(0px);
   opacity: 100%;
 }
}

.animation-basket-enter {
 .card {
   transform: translateX(100px);
   opacity: 0%;
 }
}
.animation-basket-enter-active {
 .card {
   transition:${theme.animations.speed.quick};
   transform: translateX(0px);
   opacity: 100%;
 }
}

.animation-basket-exit {
 .card {
   transform: translateX(0px);
   opacity: 100%;    //(1) passse de entierement visible(100%)
 }
}
.animation-basket-exit-active {
 .card {
   transform: translateX(-100px);    // chiffre negatif car ont veut que ça aille vers la gauche
   opacity: 0%;                 //(2) à invisible(0%)
   transition:${theme.animations.speed.quick};
 }
}
`