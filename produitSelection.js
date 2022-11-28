//récupération de la chaine de requête dans l'url
const  queryStringUrlId = window.location.search;
console.log(queryStringUrlId);

//extraction de l'id dans l'url
const extractionId = queryStringUrlId.slice(1)
console.log(extractionId)