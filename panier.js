let enregistrementProduitLocalStorage = JSON.parse(localStorage.getItem("produit"));


//Afficher les produit dans l'html

const positionElementPanier = document.querySelector("#panier-product-choose");

if(enregistrementProduitLocalStorage === null){
    let panierVide = `

        <div id="panier-vide"><p>Votre panier est vide</p></div>

    `;
    console.log("jesuis vide")

    positionElementPanier.innerHTML = panierVide;

}else{
    let structurePagePanierProduitChoisis = [];

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
                    <p>${enregistrementProduitLocalStorage[j].prix}</p>
                </div>

                <div>
                    <h4>Quantité:</h4>
                    <p>1</p>
                </div>

                <div >
                <button class="btnSuppression">Supprimer le produit</button>
                </div>
            </div>

            
        `;

        positionElementPanier.innerHTML = structurePagePanierProduitChoisis;
        

    }
    
}

//Supprimer les produits
let btnSuppression = document.querySelectorAll(".btnSuppression");


for(let f = 0; f < btnSuppression.length; f++){
 
btnSuppression[f].addEventListener("click",(event) =>{
    event.preventDefault();

    let idProduitSuppression = enregistrementProduitLocalStorage[f].idProduitSelection;
   console.log(idProduitSuppression)

   enregistrementProduitLocalStorage = enregistrementProduitLocalStorage.filter(element => element.idProduitSelection !== idProduitSuppression);
    console.log(enregistrementProduitLocalStorage)
    //renvoyer le changement dans la clé produit 
   localStorage.setItem("produit", JSON.stringify(enregistrementProduitLocalStorage));

   window.location.href = "panier.html"
} )
}

//vider le panier
const positionElementPanierSupression = document.querySelector("#panier");

const boutonSuppressionPanier = `
            <div id="montant-panier">
                <strong>Total du panier :</strong>
                <button id="btnSuppressionPanier"> Vider le panier</button> 
            </div>
      
`;

//injection html
positionElementPanierSupression.insertAdjacentHTML("beforeend", boutonSuppressionPanier )

const boutonSelectionPanier2 = document.querySelector("#btnSuppressionPanier");

console.log(boutonSelectionPanier2)

boutonSelectionPanier2.addEventListener("click", (event)=>{
    event.preventDefault
    localStorage.removeItem("produit");
    window.location.href = "panier.html"
})













