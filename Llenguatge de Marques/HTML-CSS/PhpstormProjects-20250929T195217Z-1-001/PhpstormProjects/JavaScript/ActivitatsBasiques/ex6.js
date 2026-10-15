const p = document.getElementById('resultat1');
function funcio() {
    let aleatori1 = Math.ceil(Math.random()*10);
    let aleatori2 = Math.ceil(Math.random()*10);
    let contador = 0;

    while (aleatori1!==aleatori2)
    {
        contador++;
        aleatori2=Math.ceil(Math.random()*10)
    }
    p.innerText+=`El numero era: ${aleatori1}, i s'ha adivinat en ${contador} intents |`;
}