const text = document.getElementById('input')
const pare = document.getElementById('llistaTasques')
function afegir(){
    let value = text.value;
    const li = document.createElement("li")
    li.innerText=value+" "
    pare.appendChild(li);
    const button = document.createElement("button")
    button.innerText="eliminar"
    li.appendChild(button)
    const button2 = document.createElement("button")
    button2.innerText="resaltar"
    li.appendChild(button2)
    
}
