const p = document.getElementById('resultat1')
function contar() {
    let contador = 10;
    let msg = ""
    while (contador>=1)
    {
        msg+=contador+" ";
        contador--;
    }
    p.innerText+=msg;
}