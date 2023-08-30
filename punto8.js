let planeta1={
    nombre: "Tierra",
    latitud: 80.5,
    longitud: 109.10,
    nivelOxigeno: 0.21, // 21% = 21/100 = 0.21
    volAgua: 0.75,
}

let planeta2={
    nombre: "Namek",
    latitud: 180.5,
    longitud: 19.10,
    nivelOxigeno: 0.08, 
    volAgua: 0.09,
}

// PREPARANDO LAS ENTRADAS
let planetas=Array(planeta1, planeta2)

function analizarPlanetas(planetas){
    // Recorrrer un arreglo
    let mapa=planetas.map(function(planeta){
        return (planeta.volAgua)
    })

    let suma=0
    mapa.forEach(function(volAgua){
        suma= suma+volAgua
    })
    
    return suma
}

console.log(analizarPlanetas(planetas));

