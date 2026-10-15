document.body.style.backgroundColor=localStorage.getItem("colorfons");
const opciomarcada=document.querySelector("select");
opciomarcada.value=localStorage.getItem("colorfons");


function canviColor(){
    document.body.style.backgroundColor=opciomarcada.value;
    localStorage.setItem("colorfons",opciomarcada.value)
}
