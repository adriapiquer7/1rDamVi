const formulari = document.getElementById("formulari");
const nomInput = document.getElementById("nomInput");
const emailInput = document.getElementById("emailInput");

const resultat = document.getElementById("resultat");

formulari.addEventListener("submit",(event)=>{
    event.preventDefault();

    let erroni =false;

    if (nomInput.value===""){
        nomInput.style.border="2px red solid"
        erroni=true
    }
    else{
        nomInput.style.border="1px black solid"
    }
    if (emailInput.value===""){
        erroni=true
        emailInput.style.border="2px red solid"
    }
    else{
        emailInput.style.border="1px black solid"
    }

    if (erroni){
        resultat.innerText="Omple tots els camps"
        resultat.style.color="red"
    }
    else{
        const email = emailInput.value;

        if (email.includes("@")){
            const domini = email.substring(email.indexOf("@")+1)
            if (domini.includes(".")){

                if (domini.substring(domini.indexOf(".")+1).length){
                    emailInput.style.border="1px black solid"
                    resultat.innerText="Formulari enviat correctament"
                    resultat.style.color="green"
                }
                else{
                    emailInput.style.border="2px red solid"
                    resultat.innerText="l'email es incorrecte"
                    resultat.style.color="red"
                }

            }
            else{
                emailInput.style.border="2px red solid"
                resultat.innerText="l'email es incorrecte"
                resultat.style.color="red"
            }
        }
        else{
            emailInput.style.border="2px red solid"
            resultat.innerText="l'email es incorrecte"
            resultat.style.color="red"
        }
    }
})


