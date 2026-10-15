const inputText = document.getElementById('input')
const p = document.getElementById('resultat')

inputText.addEventListener("change", ()=>{
    let Paraules = (String) (inputText.value).split(" ");
    let texto = "";
    for (const paraule of Paraules) {
        if(paraule.length % 2 === 0)
        {
            texto+=paraule.toLowerCase()+" "
        }
        else
        {
            texto+=paraule.toUpperCase()+" "
        }
    }
    p.innerText=texto
})