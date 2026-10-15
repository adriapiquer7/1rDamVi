const edatInput= document.getElementById("edat")
const nomInput = document.getElementById("nom")
const p = document.getElementById('resultat')

function mostrar(){
    p.innerText=""
    $.ajax({
        method:"POST",
        url:"ex2.php",
        data:{"edat": edatInput.value, "titol": nomInput.value},
        dataType:"json",
        success:function (data){
            console.log(data)
            for (const datum of data) {
                p.innerText+="ID: "+datum.idanimes+", Titol: "+datum.titol+", edat: "+datum.edatPublic+"\n"
            }

        },
        error: function (jqXHR, textStatus, error){
            console.log(jqXHR);

        }
    });
}