const imatges = document.querySelectorAll("div#imatges img")
let contador = 0;
imatges[contador].style.display="block"

function devant(){
    if(contador===2)
    {
        imatges[contador].style.display="none"
        contador=0;
        imatges[contador].style.display="block"

    }
    else
    {
        imatges[contador].style.display="none"
        contador++
        imatges[contador].style.display="block"
    }
}

function darrere(){
    if(contador===0)
    {
        imatges[contador].style.display="none"
        contador=2;
        imatges[contador].style.display="block"

    }
    else
    {
        imatges[contador].style.display="none"
        contador--
        imatges[contador].style.display="block"
    }
}