import { useState } from "react";

function PageLogin(params) {
    // state
    const [value, setValue] = useState("");

    // comportement
    const afficherPrenom = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target[0].value);
        alert(`Bonjour ${event.target[0].value}`);
        setValue("");
    }

    const handleChange = (event) => {
        console.log(event);
        setValue(event.target.value);
    }

    //affichage
    return (
        <div>
            <h1>Bienvenue chez nous!</h1>
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={afficherPrenom}>
                <input type="text" value={value} onChange={handleChange} placeholder="Entrez votre prénom..." required />
                <button>Accédez à votre espace</button>
            </form>
        </div>
    )
}

export default PageLogin;