function obtenerNombre(codigo){
    return codigo.split(":")[1]
}
console.log(obtenerNombre("ARQ255:Sara Bel-Sun"))

// EN FLECHA
let obtenerNombre2=(codigo)=> codigo(":")[1]
console.log(obtenerNombre("ARQ2556:Nodin Chavdri"))