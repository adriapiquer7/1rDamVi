let h1 = document.getElementById('nom')

let usuari = localStorage.getItem("usuari")

if(usuari){
    h1.innerText = usuari
}