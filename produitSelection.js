//récupération de la chaine de requête dans l'url

const  queryStringUrlId = window.location.search;
console.log(queryStringUrlId);

//extraction de l'id dans l'url
const urlSearchParams = new URLSearchParams(queryStringUrlId);
console.log(URLSearchParams);
const id  = urlSearchParams.get('id');

//affichage du produit du produit qui a été séléctionné
const idProduitSelection = response.find((element) => element.id === id);
console.log(idProduitSelection);


//Sélection de l'id ou le code HTML va être injecter
const positionElementProduit = document.getElementById("product-choose-right")
console.log(positionElementProduit)

//afficher du produit sur la page web
const structurePageProduit = `

<div id="product-choose-description">

                <div id="product-choose-title">
                    <h3><span>${idProduitSelection.nomProduit}</span></h3>
                    <p>chaussure unisexe</p>
                </div>
    
                <div id="product-choose-price">
                    <h2><span>${idProduitSelection.prix}</span></h2>
                </div>

                <form action="" method="get">
        
                    <div id="product-choose-colors">
                        <h3>Color</h3>

                        <div>

                            <div>
                                <input type="radio" name="color" id="color" value="red">
                                <label for="color">Rouge</label>
                            </div>
    
                            <div>
                                <input type="radio" name="color" id="color" value="yellow">
                                <label for="color">Jaune</label>
                            </div>
    
                            <div>
                                <input type="radio" name="color" id="color" value="green">
                                <label for="color">Vert</label>
                            </div>
                        </div>
                        
                    </div>
        
                    <div id="product-choose-size">
                        <h3>Size</h3>
                        <div>
                            <div>
                                <input type="radio" name="size" id="size" value="38">
                                <label for="size">Taille 38</label>
                            </div>
    
                            <div>
                                <input type="radio" name="size" id="size" value="40">
                                <label for="size">Taille 40</label>
                            </div>
    
                            <div>
                                <input type="radio" name="size" id="size" value="42">
                                <label for="size">Taille 42</label>
                            </div>
                        </div>
                        

                    </div>

                    <button id="product-purchase" type="submit">Acheter le produit</button>


                </form>

                <div id="product-description">
                    <h3>Description du produit</h3>
                    <p><span>${idProduitSelection.description}</span></p>
                </div>
    
                <div id="product-caracteristic">
                    <h3>Caractéristiques du produit</h3>
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
            </div>

`
//injection htlm
positionElementProduit.innerHTML = structurePageProduit;