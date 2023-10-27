const prompt = require("prompt-sync")();

var numero = prompt("Introduce un numero: ");
let contador = 0;

for(let i = 1;i <= numero;i++){
    if(i % 3 == 0){
        console.log(i);
        contador++;
    }
}

console.log("Hay",contador,"multiplos de 3");