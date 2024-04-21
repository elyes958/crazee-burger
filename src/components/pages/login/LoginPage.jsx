import { useState } from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

function LoginPage(params) {
    //affichage (render)
    return (
        <LoginPageStyled>
            <Logo/>
            <LoginForm/>
        </LoginPageStyled>
    )
}
// LoginForm semantiquement il signifie quelque chose c'est plus clair et plus propre de procéder comme ça(en decomposant en composant comme on a fait la)
export default LoginPage;


const LoginPageStyled = styled.div`       
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

&::before{
    content: "";
    background: url("/images/burger-and-fries-background.jpg")rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;



// pour l'image il faut utiliser le pseudo class ::before, qui permet d'ajouter un element avant et après un certain element défini, pour que cet élement apparaissent il faut ajouter la propriete content à l'intérieur
// si ont aurai mis ::after ça aurait etait après l'element, css faut rechercher sur googl ne pas chercher à retenir par coeur c'est une perte de temps, c'est avec la pratique que ça rentre
// comme ont met position absolute et 0 partout + le z-index notre content va passer sous l'element, si ont met 1 dans le z-index il va passer sur notre element(qui va donc ce retrouver en dessous)
// background-blend-mode: darken; nous permet de mettre l'opacité de l'image un peu comme sur la maquette en "sombre", + il faut rajouter le rgba(0, 0, 0, 0.7) sur le background-img n'oublie pas
//background-blend-mode: darken s'utilise uniquement avec : background: ... ; dont ses paramètres → url('...') → rgba() → pour sa couleur et l'opacité background: url('...') rgab(0,0,0,.75);
// 💡 Afin d'éviter toute l'implémentation avec le before et les propriétés qui vont avec, il existe la propriété :
// background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})
// en plus la valeur linear-gradient permet directement de gérer l'opacité désirée. C'était le petit tips de l'intégrateur.
// le "&::before" ligne 26 me permet d'eviter que le comportement before ce repete sur mes 2 element à savoir logo et login Form , j'avais ce probleme je ne sais pas pourquoi sans mettre cela je me retrouver avec le background en plus derriere le logo au lieu de l'avoir qu'une seul fois pour toute ma page(test et tu verra l'effet)
// Eplication de chatGPT:
/**
 * content: ""; : Cette propriété est utilisée pour insérer du contenu généré avant le contenu de l'élément. Dans ce cas, nous n'insérons aucun contenu réel, nous utilisons simplement ce pseudo-élément pour créer un arrière-plan.
background: url("/images/burger-and-fries-background.jpg") rgba(0, 0, 0, 0.7); : Cette propriété définit l'image de fond et la couleur de fond. L'image de fond est définie avec l'URL "/images/burger-and-fries-background.jpg". La couleur de fond est définie comme un noir semi-transparent avec une opacité de 0,7 (rgba(0, 0, 0, 0.7)).
background-size: cover; : Cette propriété définit la taille de l'image de fond pour couvrir complètement l'élément conteneur, quelle que soit sa taille. Cela garantit que l'image de fond est toujours entièrement visible, même si la taille de l'élément change.
background-position: center; : Cette propriété définit la position de l'image de fond par rapport à l'élément conteneur. En utilisant center, l'image est centrée horizontalement et verticalement dans l'élément.
background-blend-mode: darken; : Cette propriété définit le mode de fusion de l'image de fond avec la couleur de fond. Dans ce cas, le mode de fusion est défini sur darken, ce qui fera en sorte que l'image de fond soit obscurcie par la couleur de fond.
position: absolute; : Cette propriété positionne l'élément de manière absolue par rapport à son conteneur parent. Dans ce cas, cela signifie que l'élément pseudo-élément est positionné par rapport à l'élément parent, généralement le corps de la page.
top: 0;, left: 0;, right: 0;, bottom: 0; : Ces propriétés définissent les distances entre les bords de l'élément pseudo-élément et les bords de son conteneur. En les définissant à 0, l'élément pseudo-élément est étiré pour couvrir tout son conteneur.
z-index: -1; : Cette propriété définit la pile de l'élément par rapport aux autres éléments de la page. En définissant z-index: -1;, l'élément pseudo-élément est positionné en arrière-plan par rapport aux autres éléments de la page.

Sans le &, les styles de ::before s'appliqueraient à tous les enfants de LoginPageStyled, car ils ne seraient pas spécifiquement liés à LoginPageStyled lui-même. Cela signifie que ::before agirait comme un arrière-plan pour tous les enfants de LoginPageStyled, y compris Logo et LoginForm.

En utilisant &::before, vous spécifiez explicitement que le pseudo-élément ::before est lié à LoginPageStyled et uniquement à lui. Cela garantit que l'arrière-plan que vous avez défini ne s'applique qu'à LoginPageStyled et non à ses enfants.

C'est pourquoi l'utilisation de &::before est importante dans ce cas pour garantir que l'arrière-plan s'applique uniquement à l'ensemble de la page représentée par LoginPageStyled et non à ses enfants individuels.
 */