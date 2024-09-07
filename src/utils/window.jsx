// ce fichier nous permet de cree des petite fct avec une seul instructions qu'ont va pouvoir exporter
export const refreshPage = () => window.location.reload();

export const setLocalStorage = (key, value) => {  // fct qui nous permet de modifier le localStorage quand on ajoute un element dans le basket on l'ajoute egalement dans le localStorage de javascript avec cet fct qui prend 2 param une key et une value,ici notre username et la valeur ajouter au basket(le product)
    localStorage.setItem(key, JSON.stringify(value));      // le localStorage n'accepte que des valeur en string du coup ont doit utiliser JSON.stringify pour pouvoir envoyer des valeur dans le localStorage et les afficher
}

export const getLocalStorage = (key) => {     // getLocalStorage lui n'a besoin que d'une key en parametre
    return JSON.parse(localStorage.getItem(key));    //cet fois on recupere les donner dans le localStorage qui sont sous format stringify donc ont doit utiliser JSON.parse pour les remettre à leur format d'origine, et tout ça il faut qu'on le return car on va get(recuperer les donnee) quelque chose
}