let enregistrementProduitLocalStorage = JSON.parse(localStorage.getItem("produit"));
let enregistrementFormulaire = JSON.parse(localStorage.getItem("formulaireObjet"));
let prixPanier = JSON.parse(localStorage.getItem("prixPanier"));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(100000));


positionElementRecap = document.querySelector("#payement");
console.log(positionElementRecap)

const structurePageConfirmation =`
        <i class="fa-regular fa-square-check"></i>
        <h1>Your payement have been successfuly receive</h1>

        <h2 style="margin-bottom:30px;">Récap de votre commande</h2>

        <div id="recap-commande">
            <p>Prénom: ${enregistrementFormulaire.prenom}</p>
            <p>Nom: ${enregistrementFormulaire.lastname}</p>
            <p>Tel: ${enregistrementFormulaire.tel}</p>
            <p>Adresse: ${enregistrementFormulaire.adress}</p>
            <p>Email: ${enregistrementFormulaire.mail}</p>
            <p>Id de commande : #${getRandomInt(1000000)}</p>

            <p>Prix de votre commande : ${Math.round(prixPanier.panier)}€ </p>
        </div>

        <div id="recap-produit-commande">

        </div>
`;

//injection html

positionElementRecap.insertAdjacentHTML("afterbegin", structurePageConfirmation);

let structurePageProduitConfirmation = [];
const positionElementPanier = document.querySelector("#recap-produit-commande");

for(c = 0; c < enregistrementProduitLocalStorage.length; c++){

    structurePageProduitConfirmation += `

            <div>
                <div>
                    <h4>Titre du produit</h4>
                    <p>${enregistrementProduitLocalStorage[c].nomProduit}</p>   
                    <div>
                        <h4>Quantité:</h4>
                        <p>1</p>
                    </div>
                </div>
            </div>

            

        

        
    `;

    positionElementPanier.innerHTML = structurePageProduitConfirmation;
    

}

const boutonReturnHome = document.querySelector("#return-home");

boutonReturnHome.addEventListener("click", (event)=>{
    event.preventDefault();
    localStorage.clear();
    window.location.href = "accueil.html";
})


  
