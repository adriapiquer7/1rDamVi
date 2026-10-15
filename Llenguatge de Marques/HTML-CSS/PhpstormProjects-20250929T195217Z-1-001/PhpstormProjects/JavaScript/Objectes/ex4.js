function boto(){
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const p = document.getElementById("resultat")
    const dateAvui = new Date();
    let contador = 0;
    p.innerText=""
    for (let i = 1; i < 11; i++) {
        if (dateAvui.getDay()!==0||dateAvui.getDay()!==6)
        {
            p.innerText+=`Dia ${i}: ${dias[i]}, ${dateAvui.getDay()+i}/${dateAvui.getMonth()}/${dateAvui.getFullYear()}\n`
        }
        else
        {
            i--;
        }

    }
}