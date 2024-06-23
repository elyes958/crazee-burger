// Attention a bien faire des test unitaire sur les fct du dossier utils
export const deepClone = (array) => { 
    return JSON.parse(JSON.stringify(array))
 }