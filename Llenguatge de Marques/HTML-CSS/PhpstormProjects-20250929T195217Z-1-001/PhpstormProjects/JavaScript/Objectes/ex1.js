const text = document.getElementById("resultat")
function boto(){
    const classe = [];
    const alumne={
        nom: "Adria",
        cognoms: "Piquer Moreno",
        nota: 10
    }
    const alumne1={
        nom: "Pedri",
        cognoms: "Gonzalez Lopez",
        nota: 10
    }
    const alumne2={
        nom: "Lamine",
        cognoms: "Yamal Messi",
        nota: 10
    }

    classe.push(alumne);
    classe.push(alumne1);
    classe.push(alumne2);
    text.innerText=""
    for (const classeElement of classe) {
        text.innerText+= classeElement.nom+" "+classeElement.cognoms+" "+classeElement.nota+"\n";
    }
}