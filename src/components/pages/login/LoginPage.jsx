import { useState } from "react";
import LoginForm from "./LoginForm";

function LoginPage(params) {
    //affichage (render)
    return (
        <LoginForm/>
    )
}
// LoginForm semantiquement il signifie quelque chose c'est plus clair et plus propre de procéder comme ça(en decomposant en composant comme on a fait la)
export default LoginPage;