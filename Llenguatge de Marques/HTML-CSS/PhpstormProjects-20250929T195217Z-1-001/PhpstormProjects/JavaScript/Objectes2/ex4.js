const p = document.getElementById('resultat')

setInterval(()=>{
    let data = new Date();
    let mes = 1+data.getMonth()
    p.innerText= data.getDate() + "/"+ mes+"/"+data.getFullYear()+"\n"+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()
},0)