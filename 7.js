const prompt = require("prompt-sync")();

let contador = 0;
let frase;

console.log("Pon tantas frases como quieras, para salir pon null");

while(true){
    frase = prompt("");
    contador++
    if(frase == "null"){
        contador--;
        break;
    }
}

console.log("Pusiste:",contador,"frases");