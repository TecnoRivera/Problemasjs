const prompt = require("prompt-sync")();

let calif = ["Matematicas","Espanol","Ciencias","Quimica","Biologia","Historia","Formacion Civica y Etica","Literatura","Educacion fisica","Calculo"];

let valor = [];
let val = 0;
media = 0;

for(let i = 0;i < 10;i++){
    console.log(`${calif[i]}: `);
    val = parseInt(prompt(""));
    valor.push(val);
    media += val;
}

console.log("La media es de:",media/10);