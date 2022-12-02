//------------Mettre les données sur la pag ed'accueil------------

//Déclaration de variables

let id = [];
let nomProduit = [];
let description = [];
let prix = [];
let type_chaussure = [];
let structureProduits = "";
let i = [];
let url_image = [];
let quantite = [];

//Fonction qui va afficher les produits dans la page web auto
function affichageProduits(produitData){

    //Selection élement dans la page pour l'afficher par la suite
    const positionElement = document.querySelector(".product-row");

    //La boucle pour afficher tous les objets dans la page web
    for (i=0; i<produitData.length; i++){

    //Mettre les données dans  les variables
    produitData.forEach((element, i) =>{
        id[i] = element.id;
        nomProduit[i] = element.nomProduit;
        description[i] = element.description;
        prix[i] = element.prix;
        type_chaussure[i] = element.type_chaussure;
        url_image[i] = element.url_image;
    });

    //Afficher tous les produits sur la page web
    structureProduits += `
            <div class="product-box">
                <a href="http://127.0.0.1:5500/produit.html?id=${id[i]}">
                    <div id="${ url_image[i]}"></div>
                    <div class="product-info">
                        <div>
                            <h4><span>${nomProduit[i]}</span></h4>
                            <p><span>${prix[i]}€</span></p>
                        </div>
                        <span class="description-color"><p><span>${type_chaussure[i]}</span></p></span>
                    </div>
                </a>
            </div>
        `;

        //injection html
        positionElement.innerHTML = structureProduits;

    }


}


//Affichage des produits
affichageProduits(produitData)

