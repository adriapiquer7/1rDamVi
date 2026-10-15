const input = document.getElementById('input')
const p = document.getElementById('resultat1')

function Celsius(){
    const temp = input.value;
    let valor = (temp-32)*5/9
    p.innerText+=valor;
}
function Fahrenheit(){
    let temp = input.value;
    let valor = temp * 9 / 5 + 32
    p.innerText+=valor;
}