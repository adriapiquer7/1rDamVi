let h1 = document.getElementById('resultat')
let contador = 10
let interval = null

function cookie(nom, valor){
    if(valor != undefined){
        document.cookie = nom + "=" + valor + "; path=/"
    }else{
        let cookies = document.cookie.split("; ")
        for (const c of cookies) {
            let parts = c.split("=")
            if(parts[0] == nom){
                return parts[1]
            }
        }
        return null
    }
}

let temps = cookie("temps")

if(temps != null){
    contador = parseInt(temps)
}
h1.innerText = contador

function comenzar(){
    clearInterval(interval)
    contador = 10
    h1.innerText = contador

    interval = setInterval(()=>{
        contador--
        h1.innerText = contador
        cookie("temps", contador)

        if(contador <= 0){
            clearInterval(interval)
        }
    },1000)
}

function parar(){
    clearInterval(interval)
}

function reprendre(){
    clearInterval(interval)

    interval = setInterval(()=>{
        contador--
        h1.innerText = contador
        cookie("temps", contador)

        if(contador <= 0){
            clearInterval(interval)
        }
    },1000)
}