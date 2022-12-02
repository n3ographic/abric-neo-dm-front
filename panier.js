//Récupération des produits dans le localstorage
let enregistrementProduitLocalStorage = JSON.parse(localStorage.getItem("produit"));


//Afficher les produits dans l'html
const positionElementPanier = document.querySelector("#panier-product-choose");


if(enregistrementProduitLocalStorage === null){
    let panierVide = `

        <div id="panier-vide"><p>Votre panier est vide</p></div>

    `;

    //injection html
    positionElementPanier.innerHTML = panierVide;

}else{

    let structurePagePanierProduitChoisis = [];

    //Boucle qui va afficher tout les produits ajouté au panier
    for(j = 0; j < enregistrementProduitLocalStorage.length; j++){

        structurePagePanierProduitChoisis += `
            <div class="panier-produit">
                <div id="panier-image">
                    <div id="${enregistrementProduitLocalStorage[j].url_image}"></div>
                </div>
                <div>
                    <h4>Titre du produit</h4>
                    <p>${enregistrementProduitLocalStorage[j].nomProduit}</p>
                    
                </div>

                <div>
                    <h4>Taille:</h4>
                    <p>${enregistrementProduitLocalStorage[j].idSize}</p>
                </div>

                <div>
                    <h4>Couleur:</h4>
                    <p>${enregistrementProduitLocalStorage[j].idColor}</p>
                </div>

                <div>
                    <h4>Prix:</h4>
                    <p>${enregistrementProduitLocalStorage[j].prix}€</p>
                </div>

                <div>
                    <h4>Quantité:</h4>
                    <p>${enregistrementProduitLocalStorage[j].quantite}</p>
                </div>

                <div >
                <button class="btnSuppression">Supprimer le produit</button>
                </div>
            </div>

            
        `;

        //injection html
        positionElementPanier.innerHTML = structurePagePanierProduitChoisis;
        

    }
    
}

//Supprimer les produits
let btnSuppression = document.querySelectorAll(".btnSuppression");

//Boucle pour supprimer produit par produit
for(let f = 0; f < btnSuppression.length; f++){
 
btnSuppression[f].addEventListener("click",(event) =>{
    event.preventDefault(); // permet de ne pas recharger la page au clic du bouton

    let idProduitSuppression = enregistrementProduitLocalStorage[f].idProduitSelection;
   console.log(idProduitSuppression)


    //la méthode filter() av créer et retourner un nouveau tableau en contenant tous les éléments du tableau d'origine remplit par une condition donnée
   enregistrementProduitLocalStorage = enregistrementProduitLocalStorage.filter(element => element.idProduitSelection !== idProduitSuppression);
    console.log(enregistrementProduitLocalStorage)

    //renvoyer le changement dans la clé produit 
    localStorage.setItem("produit", JSON.stringify(enregistrementProduitLocalStorage));

// l'utilisateur reste sur la page à chaque clci sur le bouton
   window.location.href = "panier.html"

} )
}

//Vider le panier d'un coup
const positionElementPanierSupression = document.querySelector("#panier");

const boutonSuppressionPanier = `
            <div id="montant-panier">
                
                <button id="btnSuppressionPanier"> Vider le panier</button> 
            </div>
      
`;

//injection html
positionElementPanierSupression.insertAdjacentHTML("beforeend", boutonSuppressionPanier )

const boutonSelectionPanier2 = document.querySelector("#btnSuppressionPanier");

console.log(boutonSelectionPanier2)

boutonSelectionPanier2.addEventListener("click", (event)=>{
    event.preventDefault();
    localStorage.removeItem("produit");
    window.location.href = "panier.html";
})


//Calcul du panier
let prixCalculPanier = [];

for(let p = 0; p < enregistrementProduitLocalStorage.length; p++){

    let prixProduit = (enregistrementProduitLocalStorage[p].prix) * enregistrementProduitLocalStorage[p].quantite

    prixCalculPanier.push(prixProduit)


}

// c'est un accumulateur. Il traite chaque valeur de la liste afin de réduire à une seule valeur
const reducer =(accumulator, currentValue) => accumulator + currentValue; 

const prixTtotalProduit = prixCalculPanier.reduce(reducer,0);
console.log();

//injecter hml 
const positionElementMontantPanier= document.querySelector("#montant-panier");
console.log(positionElementMontantPanier);

const montantTotalPanier = `
            <strong>Total du panier : ${Math.round(prixTtotalProduit)}€</strong>
      
`;

//Stockage du prix

const prixPanier = {
    panier: prixTtotalProduit
}

console.log(prixPanier)
localStorage.setItem("prixPanier", JSON.stringify(prixPanier) );

positionElementMontantPanier.insertAdjacentHTML("afterbegin", montantTotalPanier)


const positionTest= document.querySelector("nav div ul");
console.log(positionTest);


positionTest.insertAdjacentHTML("beforeend", montantTotalPanier)

//Pour renvoyer l'utilisateur vers la page checkout 
const checkoutPanier  = document.querySelector("#checkout-panier")
console.log(checkoutPanier)

checkoutPanier.addEventListener("click", (event) =>{
    event.preventDefault();

    window.location.href = "checkout.html"


})






















