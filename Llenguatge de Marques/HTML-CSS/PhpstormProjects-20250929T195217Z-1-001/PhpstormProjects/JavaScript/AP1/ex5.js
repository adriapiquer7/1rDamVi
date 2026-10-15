const boton = document.querySelectorAll('button');
const sortida = document.querySelectorAll('div')[1];
boton[0].classList.add("classe1")
boton[0].classList.add("classe2")

function boto1(){
    for (const botonElement of boton) {
        botonElement.classList.add("classe1")
    }
    boton[1].classList.remove("classe2")
    boton[2].classList.remove("classe2")
    boton[0].classList.add("classe2")
    sortida.innerText="S’ha clicat el botó 1"
}
function boto2(){
    for (const botonElement of boton) {
        botonElement.classList.add("classe1")
    }
    boton[0].classList.remove("classe2")
    boton[2].classList.remove("classe2")
    boton[1].classList.add("classe2")
    sortida.innerText="S’ha clicat el botó 2"
}
function boto3(){
    for (const botonElement of boton) {
        botonElement.classList.add("classe1")
    }
    boton[1].classList.remove("classe2")
    boton[0].classList.remove("classe2")
    boton[2].classList.add("classe2")
    sortida.innerText="S’ha clicat el botó 3"
}