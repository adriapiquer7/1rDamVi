const inputNecessaries=document.getElementById("necessaries")
const inputPreferencies=document.getElementById("preferencies")
const inputEstadistiques=document.getElementById("estadistiques")
const presultat = document.getElementById("resultat")


function acceptar(){

    const data = new Date();
    data.setDate(data.getDate()+30);
    console.log(inputPreferencies.checked)

    document.cookie=`necessaries=${inputNecessaries.checked};expires=${data}`;
    document.cookie=`preferencies=${inputPreferencies.checked};expires=${data}`;
    document.cookie=`estadistiques=${inputEstadistiques.checked};expires=${data}`;


}
function rebutjar(){
    const data = new Date();
    data.setDate(data.getDate()+30);

    document.cookie=`necessaries=false;expires=${data}`;
    document.cookie=`preferencies=false;expires=${data}`;
    document.cookie=`estadistiques=false;expires=${data}`;
}
function mostrar(){

    let valorNecessaries="No trobada";
    let valorPreferencies="No trobada";
    let valorEstadistiques="No trobada";

    console.log(document.cookie)

    const llistacookies = document.cookie.split(';');
    for(let i = 0; i < llistacookies.length; i++) {
        let cookie = llistacookies[i].trim();
        const clave = cookie.split("=")[0];
        console.log(cookie)
        if (clave.trim()==="necessaries"){
            console.log("trobat")
            valorNecessaries= cookie.split("=")[1]
        }
        else if (clave.trim()==="preferencies"){
            console.log("trobat")
            valorPreferencies=cookie.split("=")[1]
        }
        else if (clave.trim()==="estadistiques"){
            console.log("trobat")
            valorEstadistiques=cookie.split("=")[1]
        }
    }
    presultat.innerText=`Configuració de cookies: Necessaries: ${valorNecessaries==="true"?"Acceptada":(valorNecessaries==="false"?"Rebutjada":valorNecessaries)}, Preferencies: ${valorPreferencies==="true"?"Acceptada":(valorPreferencies==="false"?"Rebutjada":valorPreferencies)}, Estadistiques: ${valorEstadistiques==="true"?"Acceptada":(valorEstadistiques==="false"?"Rebutjada":valorEstadistiques)}`

}
function eliminar(){
    const data = new Date();
    data.setDate(data.getDate()-1);
    document.cookie=`necessaries=false;expires=${data}`;
    document.cookie=`preferencies=false;expires=${data}`;
    document.cookie=`estadistiques=false;expires=${data}`;
}