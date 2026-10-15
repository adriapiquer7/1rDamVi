const text = document.getElementById('multi')
const pare = document.getElementById('llista')
function afegirPrimer(){
    let value = text.value;
    if(value==="")
    {
        value="Element Nou";
    }
    const li = document.createElement("li")
    li.innerText=value
    pare.prepend(li);
}
function afegirUltim(){
    let value = text.value;
    if(value==="")
    {
        value="Element Nou";
    }
    const li = document.createElement("li")
    li.innerText=value
    pare.appendChild(li);
}
function eliminarPrimer(){
    pare.firstElementChild.remove()
}
function eliminarUltim(){
    pare.lastElementChild.remove()
}