const edatInput= document.getElementById("edat")
const p = document.getElementById('resultat')

function mostrar(){
    p.innerText=""
    $.ajax({
        method:"POST",
        url:"ex1.php",
        data:{"edat": edatInput.value},
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