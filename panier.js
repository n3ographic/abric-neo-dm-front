let enregistrementProduitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(enregistrementProduitLocalStorage)

//Afficher les produit dans l'html

const positionElementPanier = document.querySelector("#panier-product-choose");

if(enregistrementProduitLocalStorage === null){
    let panierVide = `

        <div id="panier-vide"><p>Votre panier est vide</p></div>

    `;
    console.log("jesuis vide")

    positionElementPanier.innerHTML = panierVide;

}else{
    console.log(enregistrementProduitLocalStorage)
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

                <div>
                    <u>Supprimer le produit</u>
                </div>
            </div>
        `;

        positionElementPanier.innerHTML = structurePagePanierProduitChoisis;

    }
}





