let enregistrementProduitLocalStorage = JSON.parse(localStorage.getItem("produit"));



    positionElementFormulaire = document.querySelector("#page-checkout");
    console.log(positionElementFormulaire)
    
    const structurePageCheckout =`

        <form action="" method="get" id="form-checkout">
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
                <label for="phone">Phone number</label>
                <input type="tel" name="tel" id="tel" placeholder="+33">
            </div>

            <div>
                <label for="email">Email</label>
                <input type="mail" name="email" id="email" placeholder="johndoe@gmail.com">
            </div>

            <div style="width:100%; display: flex; justify-content: end; align-items: flex-end;">
                <button id="product-purchase" type="submit" ><a href="checkout.html">Acheter le produi</a>t</button>
            </div>

        </form>
    `;

    //injection html

    positionElementFormulaire.insertAdjacentHTML("afterbegin", structurePageCheckout);

    


    //Récupération du contenus du formulaire

   const boutonEnvoyerFormulaire = document.querySelector("#product-purchase");

    boutonEnvoyerFormulaire.addEventListener("click", (event) =>{
        event.preventDefault();

        const formulaireObjet = {
            prenom: document.querySelector("#name").value,
            lastname: document.querySelector("#lastname").value,
            adress:  document.querySelector("#adress").value,
            tel: document.querySelector("#tel").value,
            mail: document.querySelector("#email").value
        }
    
        console.log(formulaireObjet)
        localStorage.setItem("formulaireObjet", JSON.stringify(formulaireObjet) );
      
        const confimationCheckout = {
            enregistrementProduitLocalStorage,
            formulaireObjet
        }
        console.log(confimationCheckout)

        window.location.href = "confirmation_payement.html"


    })



    




