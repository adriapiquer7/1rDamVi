const tbody = document.querySelector("tbody");

function boto(){
    const monitors = [
        {
            COD:1234,
            nom: "Adrià",
            amplada: 24,
            altura: 180,
            pol:56,
            hz:20
        },
        {
            COD:2648,
            nom: "Pepe",
            amplada: 12,
            altura: 190,
            pol:62,
            hz:50
        },
        {
            COD:9126,
            nom: "Ruru",
            amplada: 22,
            altura: 187,
            pol:94,
            hz:80
        }
    ];
    tbody.innerText=""
    for (const monitor of monitors) {
        const tr = document.createElement("tr")

        const cod = document.createElement("td")
        const nom = document.createElement("td")
        const amplada = document.createElement("td")
        const altura = document.createElement("td")
        const pol = document.createElement("td")
        const hz = document.createElement("td")

        cod.innerText = monitor.COD
        nom.innerText = monitor.nom
        amplada.innerText = monitor.amplada
        altura.innerText = monitor.altura
        pol.innerText = monitor.pol
        hz.innerText = monitor.hz

        tr.appendChild(cod)
        tr.appendChild(nom)
        tr.appendChild(amplada)
        tr.appendChild(altura)
        tr.appendChild(pol)
        tr.appendChild(hz)
        tbody.appendChild(tr)
    }
}