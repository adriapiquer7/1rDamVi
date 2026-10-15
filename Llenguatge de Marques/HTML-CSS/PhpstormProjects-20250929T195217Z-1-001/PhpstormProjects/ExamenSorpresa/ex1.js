const div = document.getElementById('div')
function boto(){
    if(div.classList.contains("classe1"))
    {
        div.classList.remove("classe1")
    }
    else{
        div.classList.add("classe1")
    }
}