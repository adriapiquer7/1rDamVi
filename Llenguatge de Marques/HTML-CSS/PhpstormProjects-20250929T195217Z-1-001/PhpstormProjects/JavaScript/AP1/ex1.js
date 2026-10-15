let text = document.getElementById("text")
function perfil(){
    let puntsInicials = 50;
    const bonificacio = 10;
    const penalitzacio = 5;
    text.innerText="El teu perfil és: "+ (((puntsInicials+bonificacio)-penalitzacio)*2)/5
}