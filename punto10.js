let alimentos = [
  {
    nombre: "Brocoli",
    tipo: "vegetal",
    nivelEnergia: 300
  }
]

//AÑADIR ALIMENTOS 

//GENERAR NOMBRE
let generarNombre = (longitud) => {
  let chars = "abcdefghijklmnopqrstuvwxyz"
  let charLength = chars.length
  let nombre = ""
  for (let i = 0; i< longitud; i++){
    nombre += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return nombre
}

//AÑADIR TIPO ALIMENTO
let tipos = ["Animal", "Vegetal", "Insecto"]
let num = Math.floor((Math.random() * (3)));

//AÑADIR NIVEL ENERGIA
let energia = Math.floor((Math.random() * (500)));


for(let i=0; i<= 300;i++){
  let alimento={
    nombre: generarNombre(5),
    tipo: tipos[num],
    nivelEnergia: energia
  }

  alimentos.push(alimento)
}





console.log(alimentos.length);

//OBTENER ALIMENTOS TIPO VEGETAL CON 200 O MAS UNIDADES DE ENERGIA
let principal = (secundaria)=>{
  setTimeout(function(){
    let find = alimentos.filter(function(alimento){
      return (alimento.nivelEnergia >= 200)
    })
    secundaria()
    console.log(find);
  },)
}

principal(function(){

  let energia=alimentos.map(function(energia){
    return (energia.nivelEnergia)
})

let totalEnergia = 0
  energia.forEach(function(nivelEnergia){
    totalEnergia = totalEnergia+nivelEnergia
})
console.log("Total energia: " +totalEnergia);
})














/* function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

console.log(makeid(5)); */