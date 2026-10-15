const tbody = document.querySelector("tbody");
const nom = document.getElementById("nom")
const preu = document.getElementById("preu")

const MapProductes = new Map();

const text = document.querySelector("p")
function afegirProducte(){
    if (MapProductes.has(nom.value)){
        text.innerText="Aquest producte ja hi és a la taula"
    }
    else{
        const tr = document.createElement("tr");
        const tdnom=document.createElement("td");
        const tdpreu = document.createElement("td");

        tdnom.innerText= nom.value;
        tdpreu.innerText= preu.value;

        tr.append(tdnom, tdpreu);

        tbody.append(tr)

        MapProductes.set(nom.value, tr)

        text.innerText="Producte afegit exitosament"
    }



}

function eliminarProducte(){
    if (MapProductes.has(nom.value)){
        MapProductes.get(nom.value).remove();
        MapProductes.delete(nom.value)
        text.innerText="Producte eliminat exitosament"
    }
    else{
        text.innerText="Producte no existeix a la taula";
    }

}
function eliminarProductes(){
    if (MapProductes.size>0){
        tbody.replaceChildren()
        MapProductes.clear();
        text.innerText="Taula buida";
    }
    else{
        text.innerText="La taula ja està buida";
    }

}