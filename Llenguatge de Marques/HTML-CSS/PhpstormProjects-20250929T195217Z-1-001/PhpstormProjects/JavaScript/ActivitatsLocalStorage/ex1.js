const inputNom=document.getElementById("nom")
const inputValor=document.getElementById("valor")
const resultat=document.getElementById("resultat")

function AfegirGaleta(){
    localStorage.setItem(inputNom.value,inputValor.value)
}
function VeureGaleta(){
    const cookie = localStorage.getItem(inputNom.value)

    if(cookie===null)
    {
        resultat.innerText='La cookie no existeix'
    }
    else
    {
        resultat.innerText=`La cookie ${inputNom.value} te el valor ${cookie}`
    }
}
function EliminarGaleta(){
    localStorage.removeItem(inputNom.value)
}