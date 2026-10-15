const inputNom=document.getElementById("nom")
const inputValor=document.getElementById("valor")
const resultat=document.getElementById("resultat")


function getCookie(cname){
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function AfegirGaleta(){
    let data = new Date();
    data.setDate(data.getDate()+1)

    document.cookie=`${inputNom.value}=${inputValor.value}; expires=${data}`;
}
function VeureGaleta(){
    const cookie = getCookie(inputNom.value)

    if(cookie==='')
    {
        resultat.innerText='La cookie no existeix'
    }
    else
    {
        resultat.innerText=`La cookie ${inputNom.value} te el valor ${inputValor.value}`
    }
}
function EliminarGaleta(){
    const data = new Date()
    data.setDate(data.getDate()-20)
    document.cookie=`${inputNom.value}=${inputValor.value}; expires=${data}`;
}