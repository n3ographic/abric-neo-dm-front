//Récupération des produits dans le localstorage
let enregistrementProduitLocalStorage = JSON.parse(localStorage.getItem("produit"));

//Mise en place de l'html pour placer le formulaire dans la page
    positionElementFormulaire = document.querySelector("#page-checkout");
    console.log(positionElementFormulaire)
    
    const structurePageCheckout =`

        <form method="get" id="form-checkout">
            <h1>Checkout</h1>

            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="John">
            </div>

            <div>
                <label for="lastname">Lastname</label>
                <input type="text" name="lastname" id="lastname" placeholder="Doe">
            </div>

            <div>
                <label for="adress">Adress</label>
                <input type="text" name="adress" id="adress" placeholder="Location">
            </div>

            <div>
                <label for="tel">Téléphone</label>
                <input type="tel" name="tel" id="tel" placeholder="+33">
            </div>

            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="johndoe@gmail.com">
            </div>

            <div style="width:100%; display: flex; justify-content: end; align-items: flex-end;">
             <button id="product-purchase" type="submit" >Acheter le produit</button>
            </div>

        </form>
    `;

    //injection html
    positionElementFormulaire.insertAdjacentHTML("afterbegin", structurePageCheckout);


    //Récupération du contenus du formulaire
   const boutonEnvoyerFormulaire = document.querySelector("#product-purchase");

    boutonEnvoyerFormulaire.addEventListener("click", (event) =>{
        event.preventDefault(); // permet de ne pas recharger la page au clic du bouton

        //pour faire propre on crée un nouvelle clé pour enregistrer les infos du formulaire
        const formulaireObjet = {
            prenom: document.querySelector("#name").value,
            lastname: document.querySelector("#lastname").value,
            adress:  document.querySelector("#adress").value,
            tel: document.querySelector("#tel").value,
            mail: document.querySelector("#email").value
        }
    
        console.log(formulaireObjet)
        localStorage.setItem("formulaireObjet", JSON.stringify(formulaireObjet) );
      
        //Au clic du bouton on renvoie l'utilisateur vers la page de récapitulation de la commande
        window.location.href = "confirmation_payement.html"


    })



    




