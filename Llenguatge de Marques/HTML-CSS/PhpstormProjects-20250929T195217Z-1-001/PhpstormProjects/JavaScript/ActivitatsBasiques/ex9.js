function comprovacio() {
    const p = document.getElementById('resultat')
    const text = document.getElementById('multi').value
    let contador = 0;
    for (let i = 0; i<text.length; i++)
    {
        if (text.charAt(i)==="A"||text.charAt(i)==="a")
        {
            contador++
        }
    }
    p.innerText+=contador
}