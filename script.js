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





//========Déclaration du tableau de données=========

const response = [
    {
        nomProduit:"Produit1",
        //description:"",
        prix:"150"
    },

    {
        nomProduit:"Produit2",
        //description:"",
        prix:"1500"
    },

    {
        nomProduit:"Produit3",
        //description:"",
        prix:"150"
    },

    {
        nomProduit:"Produit4",
        //description:"",
        prix:"150"
    },

    {
        nomProduit:"Produit5",
        //description:"",
        prix:"150"
    },

    {
        nomProduit:"Produit6",
        //description:"",
        prix:"150"
    },

    {
        nomProduit:"Produit7",
        //description:"",
        prix:"150"
    },
]


//------------Mettre les données sur la page d'accueil------------

//déclaration de variable
let nomProduit = [];
let description = [];
let  prix = [];
let structureProduits = "";
let i = [];

// fonction qui va afficher les produits dans la page web auto
function affichageProduits(response){

    //select-ion élement du DOM
    const positionElement = document.querySelector(".product-row");

    //la boucle pour afficher tous les objets dans la page web
    for (i=0; i < response.length; i++){

    //mettre les données dans  les variables
    response.forEach((element, i) =>{
        nomProduit[i] = element.nomProduit;
        description[i] = element.description;
        prix[i] = element.prix;
    });

    //afficher tous les produits sur la page web
    structureProduits += `
            <div class="product-box">
                <a href="http://127.0.0.1:5500/produit.html?name=Nike-Air-Max-SKY&price=150€&description=Chaussure-de-course">
                    <div id="product-image-1"></div>
                    <div class="product-info">
                        <div>
                            <h4><span>${nomProduit[i]}</span>Nike Air Max SKY</h4>
                            <p><span>${prix[i]}</span>150€</p>
                        </div>
                        <span class="description-color"><p><span>${description[i]}</span>150€</p>Chaussure de course</p></span>
                    </div>
                </a>
            </div>
        `;
        //injection html
        positionElement.innerHTML = structureProduits;

    }


}



affichageProduits(response)

