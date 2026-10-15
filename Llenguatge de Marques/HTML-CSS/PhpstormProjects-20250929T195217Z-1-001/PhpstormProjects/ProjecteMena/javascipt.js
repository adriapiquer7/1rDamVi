const p = document.getElementById('Missatge')
const form = document.getElementById('formulari')

form.onsubmit = function (ev){
    /*declarar variables*/
    ev.preventDefault()
    const nomInput = document.getElementById('usuari')
    const contrasenyaInput = document.getElementById('contrasenya')
    const nickname = document.getElementById('nickname')
    const score = document.getElementById('puntuacio')
    const facil = document.getElementById("facil")
    const normal = document.getElementById("normal")
    const dificil = document.getElementById("dificil")
    const borrarCookie = document.getElementById("esborrar")
    p.innerText=""
    /*llamada al ajax para mirar lo hecho en el php*/
    $.ajax({
        method:"POST",
        url:"ex1.php",
        data:{"nomUsuari": nomInput.value, "contrasenya": contrasenyaInput.value},
        dataType:"json",
        /*si el resultado de lo hecho en el php esta bien hacemos lo siguiente*/
        success:function (data){
            if (data.Estat==="Okay"){
                p.innerText="usuari logejat"
                form.style.display = "none"
                facil.disabled=false
                normal.disabled=false
                dificil.disabled=false
                borrarCookie.disabled=false
                nickname.innerText=nomInput.value
                console.log(data.score)
                score.innerText=data.score.score
            }
            else{
                p.innerText="usuari o contrasenya es incorrecte"
            }
        },
        error: function (jqXHR, textStatus, error){
            console.log(jqXHR)
        }
    });
}
