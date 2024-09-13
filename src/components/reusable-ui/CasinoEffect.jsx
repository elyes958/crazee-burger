import React from 'react';
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";


export default function CasinoEffect(count, className) {
  return (
    <CasinoEffectStyled>
      <TransitionGroup className={"transition-group"}>
        <CSSTransition classNames={"count-animated"} timeout={5000} key={count}>
          <span className={className}>{{count}}</span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoEffectStyled>
)
}
// lorsque tu est dans une situation ou tu a besoin de l'element sortant et de l'element entrant, dans l'attribut key on va mettre un element qui va provoquer un re-render du composant(un state / une props) ici on va mettre un props


const CasinoEffectStyled = styled.div`
  border: 1px solid red;

  // MOUNTING
  .count-animated-enter{
    background: green;
  }
  .count-animated-enter-active{
    background: blue;
    transition: 2s;
  }
  .count-animated-enter-done{
    background: pink;
  }

  // UNMOUNTING
   .count-animated-exit{
    background: yellow;
  }
  .count-animated-exit-active{
    background: red;
    transition: 2s;
  }
  /* .count-animated-exit-done{
    pas besoin de ce stade la vu que l'element sera deja partie(unmounting)
  } */
`;


//Conseil toujour utiliser transitionGroup avec CSSTransition meme si tu a qu'un seul élément dans l'animation
