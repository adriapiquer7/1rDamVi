const codInput = document.getElementById("cod")
const nomInput = document.getElementById("nom")
const ampladaInput = document.getElementById("amplada")
const alturaInput = document.getElementById("altura")
const polInput = document.getElementById("pol")
const hzInput = document.getElementById("hz")

let monitors = new Map ();

function recarregarTaula(){

    let taula = document.getElementById("dadesM");
    taula.replaceChildren();

    for (const monitor of monitors.values()) {

        const tr = document.createElement("tr");

        const codTd = document.createElement("td");
        const nomTd = document.createElement("td");
        const ampladaTd = document.createElement("td");
        const alturaTd = document.createElement("td");
        const polTd = document.createElement("td");
        const hzTd = document.createElement("td");

        codTd.innerText = monitor.cod;
        nomTd.innerText = monitor.nom;
        ampladaTd.innerText = monitor.amplada;
        alturaTd.innerText = monitor.altura;
        polTd.innerText = monitor.pol;
        hzTd.innerText = monitor.hz;

        tr.appendChild(codTd);
        tr.appendChild(nomTd);
        tr.appendChild(ampladaTd);
        tr.appendChild(alturaTd);
        tr.appendChild(polTd);
        tr.appendChild(hzTd);

        if(monitor.hz >= 15){
            tr.classList.add("monitor");
        }

        taula.appendChild(tr);
    }
}

function boton3(){

    if(monitors.has(codInput.value)){
        console.log("Aquest COD ja existeix");
        return;
    }

    let nouMonitor = {
        cod: codInput.value,
        nom: nomInput.value,
        amplada: ampladaInput.value,
        altura: alturaInput.value,
        pol: polInput.value,
        hz: hzInput.value
    };

    monitors.set(codInput.value, nouMonitor);
    recarregarTaula();
}

function eliminar(){

    let codiEliminar = codInput.value;

    if(monitors.has(codiEliminar)){
        monitors.delete(codiEliminar);
        recarregarTaula();
    }else{
        alert("No existeix aquest monitor");
    }

}