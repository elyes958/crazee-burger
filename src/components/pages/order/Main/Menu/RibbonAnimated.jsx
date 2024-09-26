import { CSSTransition } from "react-transition-group";
import { css } from "styled-components";
import Ribbon from "../../../../reusable-ui/Ribbon";



export default function RibbonAnimated() {
  return (
    <CSSTransition>
        <Ribbon className={"ribbon"} label="nouveau"></Ribbon>
    </CSSTransition>
  )
}

export const ribbonAnimation = css`
    .ribbon-animation-appear {
        position: absolute;
        opacity: 0.1;
        transform: scale(1.8);
        &.ribbon-animation-appear-active {
            transition: ease-out 500ms;
            opacity: 1;
            transform: scale(1);
        }
    }

    .ribbon-animation-exit {
        position: absolute;
        opacity: 1;
        transition: 1000ms;
        &.ribbon-animation-exit-active {
            opacity: 0.1;
            transform: scale(1.5);
        }
    }
`
