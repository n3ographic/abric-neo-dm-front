//Récupération de la chaine de requête dans l'url
const queryStringUrlId = window.location.search;
console.log(queryStringUrlId);

//Extraction de l'id dans l'url
const urlSearchParams = new URLSearchParams(queryStringUrlId);
console.log(URLSearchParams);
const id  = urlSearchParams.get('id');

//Affichage du produit du produit qui a été séléctionné
const idProduitSelection = produitData.find((element) => element.id === id); 
// l'élément find va permettre de renvoyer le premier élément trouvé dans le tableau  qui respecte la condition donnée

//Sélection de l'id ou le code HTML va être injecter
const positionElementProduit = document.getElementById("product-choose")

//Affichage du produit sur la page web
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
                        <h2><span>${idProduitSelection.prix}€</span></h2>
                    </div>

                    
            
                        <div id="product-choose-colors">
                            <h3>Color</h3>

                            <div>

                            <select name="option_color" id="option_color">
                                
                            </select>
                        
                            </div>
                            
                        </div>

                        
            
                        <div id="product-choose-size">
                            <h3>Size</h3>
                            <div>
                                <select name="option_size" id="option_size"></select>
                            </div>
                            
                        </div>

                        <div id="product-choose-quantite" style="margin-top:20px">
                            
                        </div>

                        <button id="product-purchase" type="submit">Acheter le produit</button>


                    

                    <div id="product-description">
                        <h3>Description du produit</h3>
                        <p><span>${idProduitSelection.description}</span></p>
                    </div>
    </div>
</div>

`;

//Affichage option des couleurs 
const optionColor = idProduitSelection.color;
let optionStructureColor =[];

//Il va directement prendre toutes les couleurs associé à un produit
for(let a = 0; a < optionColor.length; a++){
    optionStructureColor += `
    <option value="${optionColor[a]}">${optionColor[a]}</option>

    `;
}

//Affichage option des tailles 
let optionTaille = idProduitSelection.taille;
let optionStructureTaille=[];
console.log(optionTaille)

// il va directement prendre toutes les couleurs associé à un produit
for(let e = 0; e < optionTaille.length; e++){
    optionStructureTaille += `
    <option value="${optionTaille[e]}">${optionTaille[e]}</option>

    `;
}


//injection htlm
positionElementProduit.innerHTML = structurePageProduit;



const positionOptionSelectColor = document.querySelector("#option_color");
positionOptionSelectColor.innerHTML = optionStructureColor;

const positionOptionSelectTaille = document.querySelector("#option_size");
positionOptionSelectTaille.innerHTML = optionStructureTaille;


//Ajout de la position de l'option quantité
const positionOptionSelectQuantite = document.querySelector("#product-choose-quantite");

let optionStructureQuantite =[];
optionStructureQuantite = `
    <label for="quantity">Quantité</label>
    <input type="number" id="option_quantite" name="option_quantite" value="1" min="1" max="5">

    `;

positionOptionSelectQuantite.innerHTML = optionStructureQuantite;





//============Gestion du panier============

//Récupérer la couleur, la taille et la quantité choisis du produit

//Sélection de l'id couleur du formulaire
const idColor = document.querySelector("#option_color");
console.log(idColor)

//Sélection de l'id size du formulaire
const idSize = document.querySelector("#option_size");

const optionQuantite = document.querySelector("#option_quantite");

//Clique sur le bouton Ajouter au panier
const btnBoutonEnvoyerPanier = document.querySelector("#product-purchase")

btnBoutonEnvoyerPanier.addEventListener("click", (event)=>{
    event.preventDefault(); // permet de ne pas recharger la page au clic du bouton

    //Choix utilisateur couleur et taille
    const choixColorForm = idColor.value;
    const choixSizeForm = idSize.value;

    //Récupérer les valeurs du formulaire
    let optionProduit = {
        url_image:idProduitSelection.url_image,
        nomProduit: idProduitSelection.nomProduit,
        idProduitSelection: idProduitSelection.id,
        idColor: choixColorForm,
        idSize: choixSizeForm,
        quantite : optionQuantite.value,
        prix:idProduitSelection.prix,
}

console.log(optionProduit);


//===========Mise en place du local storage============
let enregistrementProduitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(enregistrementProduitLocalStorage)

//vérifie si il y a des produits dans le localstorage
if(enregistrementProduitLocalStorage){
    enregistrementProduitLocalStorage.push(optionProduit);
    localStorage.setItem("produit", JSON.stringify(enregistrementProduitLocalStorage));


}

//vérifie si il y a  pas de produits dans le localstorage
else{
    enregistrementProduitLocalStorage = [];
    enregistrementProduitLocalStorage.push(optionProduit);
    localStorage.setItem("produit", JSON.stringify(enregistrementProduitLocalStorage));
    console.log(enregistrementProduitLocalStorage)

}

});










