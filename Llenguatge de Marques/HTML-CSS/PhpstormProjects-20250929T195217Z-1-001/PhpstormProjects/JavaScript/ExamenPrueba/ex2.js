const nom = document.getElementById('nom')
const massa = document.getElementById('massa')
const medida = document.getElementById('tam')
const ing = document.getElementById('ing')
const p = document.getElementById('resultat')

function CrearPizza(){
    const pizzes = [];
    const pizza ={
        nom: nom.value,
        massa: massa.value,
        tamany: medida.value,
        ingredients: ing.value,
        mostrar: function (){
            p.innerText=`Has creat la pizza ${this.nom} amb la massa ${this.massa}`
        }
    }
    pizza.mostrar()
    pizzes.push(pizza)
    localStorage.setItem('ultimafegir', pizza.mostrar())
}