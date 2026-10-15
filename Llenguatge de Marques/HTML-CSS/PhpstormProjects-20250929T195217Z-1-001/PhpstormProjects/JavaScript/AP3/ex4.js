let p = document.getElementById('missatge')
let form = document.getElementById('formulari')

form.addEventListener("submit", validar)

function validar(e){
    e.preventDefault()

    let usuari = document.getElementById('usuari').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    let pass2 = document.getElementById('pass2').value

    p.classList.remove("error")
    p.classList.remove("success")

    if(usuari == "" || email == "" || pass == "" || pass2 == ""){
        p.innerText = "Tots els camps han d’estar omplerts"
        p.classList.add("error")
        return
    }

    if(!email.endsWith("@ies-sabadell.cat")){
        p.innerText = "El correu ha de ser de l’institut"
        p.classList.add("error")
        return
    }

    if(pass.length < 8){
        p.innerText = "La contrasenya ha de contenir almenys 8 caràcters"
        p.classList.add("error")
        return
    }

    p.innerText = "Formulari enviat correctament"
    p.classList.add("success")

    localStorage.setItem("usuari", usuari)

    setTimeout(()=>{
        window.location.href = "PaginaPrincipal.html"
    },2000)
}