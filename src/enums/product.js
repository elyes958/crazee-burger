// Dans le dossier enums nous allons ranger toutes les const qu'on a besoin d'exporter ailleur dans l'application
export const EMPTY_PRODUCT = Object.freeze({
    id          : "",
    title       : "",
    imageSource : "",
    price       : 0,
})
// Object.freeze sert a protéger notre objet pour qu'on ne puisse plus le modifier ni lui ajouter d'autres valeurs