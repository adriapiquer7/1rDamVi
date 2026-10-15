const p = document.getElementById('resultat')
function enviar(){
    const nomJoc = document.getElementById('nomJoc')
    p.innerText=""
    /*llamada al ajax para mirar lo hecho en el php*/
    $.ajax({
        method:"GET",
        url:"ex2.php",
        data:{"TitolVideojoc": nomJoc.value},
        dataType:"json",
        /*si el resultado de lo hecho en el php esta bien hacemos lo siguiente*/
        success:function (data){
            if (data.Estat==="Okay" && data.puntuacio <10){
                p.innerText="El videojoc existeix i no és excel·lent."
            }
            else if (data.Estat==="Okay" && data.puntuacio===10){
                p.innerText="El videojoc existeix i és una passada"
            }
            else{
                p.innerText="El videojoc no existeix!"
            }
        },
        error: function (jqXHR, textStatus, error){
            console.log(jqXHR)
        }
    });
}
