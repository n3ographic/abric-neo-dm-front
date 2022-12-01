//------------Mettre les données sur la page d'accueil------------

//déclaration de variable
//let url = [];
let id = [];
let nomProduit = [];
let description = [];
let prix = [];
let type_chaussure = [];
let structureProduits = "";
let i = [];
let url_image = [];
let quantite = [];

// fonction qui va afficher les produits dans la page web auto
function affichageProduits(produitData){

    //select-ion élement du DOM
    const positionElement = document.querySelector(".product-row");

    //la boucle pour afficher tous les objets dans la page web
    for (i=0; i<produitData.length; i++){

    //mettre les données dans  les variables
    produitData.forEach((element, i) =>{
        id[i] = element.id;
        nomProduit[i] = element.nomProduit;
        description[i] = element.description;
        prix[i] = element.prix;
        type_chaussure[i] = element.type_chaussure;
        url_image[i] = element.url_image;

        //url[i] = element.url;
    });

    //afficher tous les produits sur la page web
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



affichageProduits(produitData)

