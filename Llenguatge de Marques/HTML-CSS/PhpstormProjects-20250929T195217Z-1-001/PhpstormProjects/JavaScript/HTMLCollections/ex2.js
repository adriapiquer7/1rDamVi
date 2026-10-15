const resultat = document.getElementById('resultat')
const pare = document.getElementById("llista");
function boto(){
    const SetMierda = new Set();
    for (let i = 0; i < 100; i++) {
        let valor = Math.ceil(Math.random()*100)
        SetMierda.add(valor)
    }
    pare.innerHTML=""
    for (const setElement of SetMierda) {
        const li = document.createElement("li")
        li.innerText= setElement
        pare.appendChild(li)
    }
    resultat.innerText = 'Finalment hi ha '+ SetMierda.size + ' elements'
}