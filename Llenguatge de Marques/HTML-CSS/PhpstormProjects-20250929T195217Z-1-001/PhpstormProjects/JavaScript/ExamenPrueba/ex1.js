const container = document.getElementById('container')
const p = document.getElementById('resultat')
function AfegirCaixa(){
    let dib = document.createElement('div')
    dib.classList.add('caixa')
    dib.style.backgroundColor = 'lime'
    container.appendChild(dib)
    let contador = 0;
    dib.addEventListener('click', ev =>{
        if(ev.target){
            contador++;
            p.innerText=contador;
        }
    })
}
