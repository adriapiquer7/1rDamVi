const pContador = document.querySelector("p");

let contador=0;
if (localStorage.getItem("nvisites")!==null){
    console.log("Hola")
    contador=Number(localStorage.getItem("nvisites"));
}
contador++;
localStorage.setItem("nvisites",contador);

pContador.innerText=contador;

function eliminar(){
    localStorage.removeItem("nvisites")
    contador=0;
    pContador.innerText=contador;
}