const p = document.getElementById('resultat1')

function random(min,max){
    return Math.random() * (max-min) + min
}

let hora = random(0,23)
console.log(hora)

function boton(){
    let saludo = hora <= 12 ? "Bon dia" : "Bona tarda"
    p.innerText=saludo;
}