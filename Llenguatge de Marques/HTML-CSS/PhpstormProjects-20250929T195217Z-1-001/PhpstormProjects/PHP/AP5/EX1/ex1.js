const correuInput = document.getElementById('email')
const passwd = document.getElementById('credencial')
const p = document.getElementById('resultat')
function register(){
    $.ajax({
        method:"POST",
        url:"register.php",
        data:{"email": correuInput.value, "contrasenya": passwd.value},
        dataType:"json",
        success:function (data){
            console.log(data)
            p.innerText="Estat: "+data.Estat+"\n"+" Missatge: "+data.Missatge
            if(data.Estat === "OK"){
                p.style.color = "green"
            }
            else{
                p.style.color = "red"
            }
        },
        error: function (jqXHR, textStatus, error){
            console.log(jqXHR);

        }
    });
}

function login(){
    $.ajax({
        method:"POST",
        url:"login.php",
        data:{"email": correuInput.value, "contrasenya": passwd.value},
        dataType:"json",
        success:function (data){
            console.log(data)
            p.innerText="Estat: "+data.Estat+"\n"+"Missatge: "+data.Missatge
            if(data.Estat === "OK"){
                p.style.color = "green"
            }
            else{
                p.style.color = "red"
            }
        },
        error: function (jqXHR, textStatus, error){
            console.log(jqXHR);

        }
    });
}

function getUsers(){
    $.ajax({
        method:"GET",
        url:"getUsers.php",
        data:{},
        dataType:"json",
        success:function (data){
            console.log(data)
            for (const datum of data.result) {
                p.innerText+="Email: "+datum.email+" , Contrasenya: "+datum.contrasenya+"\n"
            }

        },
        error: function (jqXHR, textStatus, error){
            console.log(jqXHR);

        }
    });
}