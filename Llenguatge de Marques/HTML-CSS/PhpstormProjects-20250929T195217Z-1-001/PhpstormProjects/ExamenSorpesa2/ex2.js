let p = document.getElementById('resultat')
let cont = document.getElementById('contenidor')
let contador = 0;

function random(min,max){
    return Math.random() * (max-min) + min
}
function posaCaixes(){
    let num = random(0, 4)
    for (let i = 0; i < num; i++) {
        let r = random(0, 255)
        let g = random(0, 255)
        let b = random(0, 255)
        let caixa = document.createElement('div')
        caixa.classList.add('items')
        caixa.style.backgroundColor = `rgb(${r},${g},${b})`
        cont.appendChild(caixa)
        AfegirGaleta()
    }
}

function clica2(){
    for (let i = 0; i < contador; i++) {
        localStorage.removeItem(`CAIXA${contador}`);
    }
    contador=0;
    cont.innerHTML="";
    p.innerText = `S'ha resetejat el contingut`
}

function AfegirGaleta(){
    localStorage.setItem(`CAIXA${contador}`,contador)
    contador++;
    p.innerText = `En total hi ha ${contador} elements`
}