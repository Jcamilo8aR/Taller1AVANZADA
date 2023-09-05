let edades =[]

//GENERAR EDADES
for(let i=0; i<=19;i++){
    let edad = Math.floor((Math.random() * 50) + 1);
    edades.push(edad)
}
//console.log(edades);


//ENCONTRAR MAYOR EDAD
let mayor =(Math.max(...edades));
console.log(`Mayor edad: ${mayor}`);

let repetidas = 0
const tempArray = [...edades].sort();
 

//VER SI HAY EDADES REPETIDAS
for (let i = 0; i < edades.length; i++) {
  if (edades[i] == mayor) {
    repetidas = repetidas +1
  }
}
 
if(repetidas > 1){
    console.log(`Numero de ocaciones en la que la mayor edad esta repetida: ${repetidas}`);
}
