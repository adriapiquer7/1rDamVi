const p = document.getElementById('p')
function boto(){
    let contador = 10;
    let interval = setInterval(()=>{
        if(contador>=0)
        {
            p.innerText=contador
            contador--
        }
        else if (contador===0)
        {
            clearInterval(interval)
        }
    }, 1000)
}