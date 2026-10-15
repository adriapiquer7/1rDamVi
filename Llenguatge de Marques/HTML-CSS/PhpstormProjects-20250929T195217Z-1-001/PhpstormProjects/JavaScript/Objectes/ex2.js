const p = document.getElementById("resultat")
function boto(){
    const vehicle={
        marca: "Porsche",
        model: "911",
        any: 2026,
    }
    vehicle.ecologic=true
    p.innerText=""
    for (const vehicleKey in vehicle) {
        p.innerText+=" "+ vehicleKey+": "+ vehicle[vehicleKey]+" "
    }

}