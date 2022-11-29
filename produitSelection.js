//récupération de la chaine de requête dans l'url

const  queryStringUrlId = window.location.search;
console.log(queryStringUrlId);

//extraction de l'id dans l'url
const urlSearchParams = new URLSearchParams(queryStringUrlId);
console.log(URLSearchParams);
const id  = urlSearchParams.get('id');

//affichage du produit du produit qui a été séléctionné
const idProduitSelection = response.find((element) => element.id === id);
//console.log(idProduitSelection);


//Sélection de l'id ou le code HTML va être injecter
const positionElementProduit = document.getElementById("product-choose")

//afficher du produit sur la page web
const structurePageProduit = `
    <div id="product-choose-left" >
        <div id="${idProduitSelection.url_image}"></div>
    </div>

<div id="product-choose-right">
    <div id="product-choose-description">

                    <div id="product-choose-title">
                        <h3><span>${idProduitSelection.nomProduit}</span></h3>
                        <p><span>${idProduitSelection.type_chaussure}</span></p>
                    </div>
        
                    <div id="product-choose-price">
                        <h2><span>${idProduitSelection.prix}</span></h2>
                    </div>

                    <form action="" method="get">
            
                        <div id="product-choose-colors">
                            <h3>Color</h3>

                            <div>

                            <select name="option_color" id="option_color">
                                <option value="red">Red</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                            </select>
                        

                            </div>
                            
                        </div>
            
                        <div id="product-choose-size">
                            <h3>Size</h3>
                            <div>
                                <select name="option_size" id="option_size">
                                    <option value="38">38</option>
                                    <option value="40">40</option>
                                    <option value="42">42</option>
                                </select>
                            </div>
                            
                        </div>

                        <button id="product-purchase" type="submit">Acheter le produit</button>


                    </form>

                    <div id="product-description">
                        <h3>Description du produit</h3>
                        <p><span>${idProduitSelection.description}</span></p>
                    </div>
    </div>
</div>

`
//injection htlm
positionElementProduit.innerHTML = structurePageProduit;


//============Gestion du panier============

//Sélection de l'id couleur du formulaire
const idColor = document.querySelector("#option_color");

//Sélection de l'id size du formulaire
const idSize = document.querySelector("#option_size");

//Clique sur le bouton Ajouter au panier
const btnBoutonEnvoyerPanier = document.querySelector("#product-purchase")

console.log(btnBoutonEnvoyerPanier);

//Event lister sur le bouton
btnBoutonEnvoyerPanier.addEventListener("click", (event)=>{
    event.preventDefault(); // permet de ne pas recharger la page au clic du bouton

    //Choix utilisateur couleur
    const choixColorForm = idColor.value;
    const choixSizeForm = idSize.value;

    //Récupérer les valeurs du formulaire
    let optionProduit = {
        nomProduit: idProduitSelection.nomProduit,
        idProduitSelection: idProduitSelection.id,
        idColor: choixColorForm,
        idSize: choixSizeForm,
        quantite : 1,
        prix:idProduitSelection.prix
}
console.log(optionProduit)
})





