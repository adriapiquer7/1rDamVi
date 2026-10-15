const div = document.getElementById('div')
let x = 0
let y = 0
let altura = innerHeight
let amplada = innerWidth
function adalt(){
    if(y>0 && y<altura)
    {
        y+=-100
    }
    setTimeout(()=>{
        div.style.transform = `translate(${x}px, ${y}px)`
    },0)
}
function esquerra(){
    if(x>0 && x<amplada)
    {
        x+=-100
    }
    div.style.transform = `translate(${x}px, ${y}px)`
}
function dreta(){
    if(x>0 && x<amplada)
    {
        x+=100
    }
    div.style.transform = `translate(${x}px, ${y}px)`
}
function abaix(){

    if(y>0 && y<altura)
    {
        y+= 100
    }
    div.style.transform = `translate(${x}px, ${y}px)`
}