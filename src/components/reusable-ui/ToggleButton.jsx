import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";


export default function ToggleButton({
  isChecked,
  onToggle,
  labelIfChecked = "Fermer",   // pareil ici pas de specifique, on essaye de laisser le composant (reutilisable tel qu'elle) et on fait remonter le specifque en props
  labelIfUnchecked = "Ouvrir",
  couleurDuBackground,
  couleurDuText,
}) {
  return (
    <ToggleButtonStyled couleurDuBackground={couleurDuBackground} couleurDuText={couleurDuText} > 
      <input
        type="checkbox"
        className="toggle"
        id="rounded"
        checked={isChecked}
        onChange={onToggle}
      />
      <label
        htmlFor="rounded"
        className="rounded"
        data-checked={labelIfChecked}
        data-unchecked={labelIfUnchecked}
      ></label>
    </ToggleButtonStyled>
  )
}

const ToggleButtonStyled = styled.div`
  /* border: 1px solid red; */

  display: flex;
  /* margin-right: 50px; */ // j'avais ajouter un margin ici mais il ne faut pas mettre du specifique dans un composant reutilisable, du coup ont va gerer ça via notre composant Profile qui n'est pas reutilisable
  input[type="checkbox"] {
    // Hides the square box but keeps the core "toggle functionality"
    &.toggle {
      display: none;
    }

    &.toggle + label {
      display: inline-block;
      height: 40px;
      width: 200px;
      position: relative;
      font-size: ${theme.fonts.size.XXS};
      letter-spacing: 0.5px;
      border: 2px solid ${theme.colors.background_dark};
      padding: 0;
      margin: 0;
      cursor: pointer;
      box-sizing: border-box;
      transition: all 500ms ease;
    }

    // the small round circle
    &.toggle + label:before {
      content: "";
      position: absolute;
      top: 3px;
      height: 30px;
      width: 30px;
      transition: all 500ms ease;
      z-index: 3;
    }

    // text inside the switch button (for checked and unchecked)
    &.toggle + label:after {
      /* border: 1px solid blue; */
      width: 150px;
      text-align: center;
      z-index: 2;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-overflow: ellipsis;
      overflow: hidden;
    }

    // outside box
    &.toggle + label.rounded {
      border-radius: 30px;
    }

    // small circle
    &.toggle + label.rounded:before {
      border-radius: 50%;
    }

    &.toggle:not(:checked) + label {
      // background-color: ${theme.colors.background_dark};
      background-color: ${(props) => props.couleurDuBackground ? props.couleurDuBackground : theme.colors.background_dark}; // on passe la props qu'on a récupérer ligne 14(voila comment on passe des props avec style components), et ont fait une condition ternaire pour les afficher ou afficher celle qui etait la de base
      /* text-align: right; */
    }

    // text label when not checked
    &.toggle:not(:checked) + label:after {
      content: attr(data-unchecked);
      right: 8px;
      left: auto;
      opacity: 1;
      color: ${(props) => props.couleurDuText ? props.couleurDuText : theme.colors.primary};
      font-weight: ${theme.fonts.weights.bold};
    }

    // small circle when not checked
    &.toggle:not(:checked) + label:before {
      left: 3px;
      background-color: ${theme.colors.primary};
    }

    // box container when checked
    &.toggle:checked + label {
      text-align: left;
      border-color: ${theme.colors.primary};
    }

    // label text when checked
    &.toggle:checked + label:after {
      content: attr(data-checked);
      left: 9px;
      right: auto;
      opacity: 1;
      color: ${theme.colors.dark};
      letter-spacing: 0px;
    }

    // small circle when checked
    &.toggle:checked + label:before {
      left: 162px;
      background-color: ${theme.colors.primary};
    }
  }
`

// ligne 14: couleurDuBackground={couleurDuBackground}, ont passe la props qu'on a recuperer du parent dans le component de style component
