function boto(){
    const p = document.getElementById("resultat")
    const diaInput = document.getElementById("dia")
    const mesInput = document.getElementById("mes")
    const anyInput = document.getElementById("año")

    const data1= new Date(anyInput.value, mesInput.value, diaInput.value);
    const data2= new Date();

    const difMili= data2.getTime()-data1.getTime()
    const difdies = Math.abs(Math.floor(difMili/(1000*60*60*24)))
    p.innerText = `La diferencia entre els dies es: ${difdies}`
}