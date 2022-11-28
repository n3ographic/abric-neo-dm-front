//récupération de la chaine de requête dans l'url

const  queryStringUrlId = window.location.search;
console.log(queryStringUrlId);

//extraction de l'id dans l'url
const urlSearchParams = new URLSearchParams(queryStringUrlId);
console.log(URLSearchParams);
const id  = urlSearchParams.get('id');

//affichage du produit du produit qui a été séléctionné
const idProduitSelection = response.find((element) => element.id === id);
console.log(idProduitSelection);