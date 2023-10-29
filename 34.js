const prompt = require("prompt-sync")();

let calif = ["Matematicas","Espanol","Ciencias","Quimica","Biologia","Historia","Formacion Civica y Etica","Literatura","Educacion fisica","Calculo"];

let valor = [];
let val = 0;
let materia;
let bandera = 0;

for(let i = 0;i < 10;i++){
    console.log(`${calif[i]}: `);
    val = parseInt(prompt(""));
    valor.push(val);
}

console.log("De que materia deseas saber tu nota?");
materia = prompt("");

for(let j = 0;j < 10;j++){
    if(calif[j] == materia){
        console.log("Tu calificacion es de",valor[j]);
        bandera = 1;
        break;
    }
}

if(bandera == 0){
    console.log("No se encontro la materia");
}