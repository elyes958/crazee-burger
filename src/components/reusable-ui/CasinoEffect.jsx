import React from 'react';
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";


export default function CasinoEffect(count, className) {
  return (
    <CasinoEffectStyled>
      <TransitionGroup className={"transition-group"}>
        <CSSTransition classNames={"count-animated"} timeout={300} key={count}>
          <span className={className}>{{count}}</span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoEffectStyled>
)
}
// lorsque tu est dans une situation ou tu a besoin de l'element sortant et de l'element entrant, dans l'attribut key on va mettre un element qui va provoquer un re-render du composant(un state / une props) ici on va mettre un props


const CasinoEffectStyled = styled.div`
  /* border: 1px solid red; */
  position: relative;
  overflow-y: hidden;
  
  span{
    display: inline-block;
  }

  // MOUNTING
  .count-animated-enter{
    /* background: green; les couleurs ct pour mieux voir les elements */
    transform: translateY(100%);    // 100% il est en bas sur l'axe Y
  }
  .count-animated-enter-active{
    /* background: blue;  les couleurs ct pour mieux voir les elements*/
    transform: translateY(0%);     // 0% il arrive au centre sur l'axe Y (il apparait)
    transition: 300ms;
  }
  .count-animated-enter-done{
    /* background: pink;  les couleurs ct pour mieux voir les elements*/
  }

  // UNMOUNTING
   .count-animated-exit{
    /* background: yellow;  pareil ct pour mieux voir les elements */
    transform: translateY(0%); // pareil il est la visible
    position: absolute;
    right: 0;
    bottom: 0; 
  }
  .count-animated-exit-active{
    /* background: red; pareil ct pour mieux voir les elements */  
    transform: translateY(-100%); // et la on le fait partir vers le haut -100% sur l'axe Y
    transition: 300ms;
  }
  /* .count-animated-exit-done{
    pas besoin de ce stade la vu que l'element sera deja partie(unmounting)
  } */
`;


//Conseil toujour utiliser transitionGroup avec CSSTransition meme si tu a qu'un seul élément dans l'animation
