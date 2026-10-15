const p = document.getElementById('resultat')
const text = document.getElementById('inputText')

function mostrar(){
    let textLlarg = (String) (text.value).split(" ");
    let Paraula = "";
    for (const paraula2 of textLlarg) {
        if (paraula2.length > Paraula.length)
        {
            Paraula=paraula2
        }
    }
    p.innerText=Paraula
}