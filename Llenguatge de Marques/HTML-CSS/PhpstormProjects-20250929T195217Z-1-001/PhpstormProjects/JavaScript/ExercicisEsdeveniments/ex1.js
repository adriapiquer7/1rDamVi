const llista = document.querySelector("ul");

llista.addEventListener("click",(event)=>{
    if (event.target.tagName==="LI"){

        for (let i =0; i<llista.children.length;i++){
            llista.children[i].classList.remove("classe1")
        }

        event.target.classList.add("classe1")
    }
})