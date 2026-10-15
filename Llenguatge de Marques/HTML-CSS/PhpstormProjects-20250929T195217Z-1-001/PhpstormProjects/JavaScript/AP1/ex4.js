const input = document.getElementById('nom')
const p = document.getElementById('resultat1')
function funcio(){
    let nota = 0;
    const nom = input.value;
    let llista = document.getElementById('ul')
    llista.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        let itemLlista = document.createElement('li')
        let valor = Math.ceil(Math.random()*10)
        itemLlista.innerText+= valor
        nota+=valor;
        llista.appendChild(itemLlista)
    }
    console.log(nota)
    if (nota<50)
    {
        p.innerText=nom + " Suspens"
        p.style.color = "red"
    }
    else if(nota>=50 && nota<=69)
    {
        p.innerText=nom + " Aprovat"
        p.style.color = "yellow"

    }
    else if(nota>=70 && nota<=89)
    {
        p.innerText=nom + "Notable"
        p.style.color = "blue"


    }
    else if(nota>90)
    {
        p.innerText=nom + " Excelent"
        p.style.color = "green"
    }
}