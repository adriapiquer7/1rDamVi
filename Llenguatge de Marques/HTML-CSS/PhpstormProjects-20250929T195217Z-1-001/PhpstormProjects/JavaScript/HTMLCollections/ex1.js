const resultat = document.getElementById('resultat')
function boto(){
    const array = [];
    for (let i = 0; i < 4; i++) {
        let valor = Math.ceil(Math.random()*20)
        array.push(valor)
    }
    let ascendent = true
    for (let i = 0; i < array.length-1; i++) {
        if (array[i]>array[i+1])
        {
            ascendent=false;
        }
    }
    resultat.innerText=array+' '+ascendent
}