import styled from "styled-components";

export default function Tab({svg, texte, className, onClick, isSelected}) {
  return (
    <TabStyled onClick={onClick} className={className} isSelected={isSelected}>{svg} {texte}</TabStyled>
  )
}


const TabStyled = styled.button`
  height: 43px;
  border-radius: 5px 5px 0px 0px;
  border: 1px 1px 2px 1px;
  text-align: center;
  cursor: pointer;

  // &:hover est une pseudo-classe qui s'applique à l'élément lorsqu'il est survolé par la souris.Sélecteur & : Le & dans styled-components se réfère au composant lui-même. Ainsi, &:hover signifie "lorsque cet élément est survolé".
  &:hover{
    text-decoration: underline;
  }

  // si isSelected est true ont change son background et sa couleur, si c'est false il est ignoré
  ${({ isSelected }) =>
    isSelected &&
    `
    background: black;
    color: white;
  `}
`;



// ligne 16 explications
// Bien sûr, je vais te l'expliquer en détail. Ce code utilise la syntaxe de styled-components pour appliquer des styles conditionnels en fonction des props du composant.

// Décomposition du code

// ${({ isSelected }) =>
//     isSelected &&
//     `
//     background: black;
//     color: white;
//   `}
// 1. Interpolation avec ${}
// Le ${} est utilisé pour insérer du JavaScript dans une chaîne de style en utilisant la syntaxe de styled-components. Tout ce qui est à l'intérieur de ${} est du code JavaScript qui sera évalué.

// 2. Fonction fléchée et déstructuration

// ({ isSelected }) =>
// Cette partie est une fonction fléchée qui prend un objet en paramètre. En utilisant la déstructuration, on extrait directement la propriété isSelected de cet objet.

// 3. Expression conditionnelle avec &&

// isSelected &&
// Cette partie utilise l'opérateur logique && (AND). En JavaScript, l'opérateur && renvoie la première valeur falsy ou la dernière valeur si toutes les valeurs sont truthy. Donc, si isSelected est true, l'expression complète après le && est évaluée et renvoyée. Si isSelected est false, l'expression complète après le && est ignorée.

// 4. Chaîne de style conditionnelle

// `
// background: black;
// color: white;
// `
// Si isSelected est true, cette chaîne de style est renvoyée et appliquée aux styles du composant. Sinon, elle est ignorée.


// Explication détaillée
// Interpolation avec isSelected :

// Lorsque TabStyled est rendu, il reçoit la prop isSelected du composant Tab.
// Fonction fléchée :

// La fonction fléchée ({ isSelected }) => ... est appelée avec l'objet des props. Elle déstructure l'objet pour extraire isSelected.
// Condition && :

// Si isSelected est true, la chaîne de style `background: black; color: white;` est renvoyée et incluse dans les styles de TabStyled.
// Application des styles :

// Si isSelected est true, les styles background: black; color: white; sont appliqués à TabStyled, modifiant son apparence.
// Si isSelected est false, les styles conditionnels ne sont pas appliqués.
// Exemple pratique
// Si tu as le composant suivant :

// <Tab texte="Ajouter un produit" isSelected={true} />
// Le CSS généré pour ce composant inclura background: black; et color: white;, car isSelected est true.

// Si tu as le composant suivant :

// <Tab texte="Ajouter un produit" isSelected={false} />
// Le CSS généré pour ce composant n'inclura pas ces styles, car isSelected est false.

// Conclusion
// Cette technique est puissante car elle permet d'appliquer des styles conditionnels de manière élégante et concise en utilisant les props de tes composants. Cela rend le code plus flexible et plus facile à maintenir.