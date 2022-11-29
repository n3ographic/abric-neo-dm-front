/*var str = "http://127.0.0.1:5500/produit.html?name=Nike-Air-Max-SKY&price=150€&description=Chaussure de course";

var url = new URL(str);

var search_params = new URLSearchParams(url.search);
if(search_params.has('name', 'description' )){
    var name = search_params.get('name');
    document.getElementById('product-choose-title').innerHTML = "<h3>"+name +"</h3>  <p>chaussure unisexe</p>";

} 

if(search_params.has('description' )){
    var description = search_params.get('description');
    document.getElementById('test').innerHTML = "<p>"+ description +"</p>";
} 
*/







//------------Mettre les données sur la page d'accueil------------

//déclaration de variable
//let url = [];
let id = [];
let nomProduit = [];
let description = [];
let  prix = [];
let type_chaussure = [];
let structureProduits = "";
let i = [];
let url_image = [];

// fonction qui va afficher les produits dans la page web auto
function affichageProduits(response){

    //select-ion élement du DOM
    const positionElement = document.querySelector(".product-row");

    //la boucle pour afficher tous les objets dans la page web
    for (i=0; i < response.length; i++){

    //mettre les données dans  les variables
    response.forEach((element, i) =>{
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
                            <p><span>${prix[i]}</span></p>
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



affichageProduits(response)

