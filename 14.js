const prompt = require("prompt-sync")();

let mayor = 0;
let menor = 0;

for(let i = 1;i <= 5;i++){
    let numero = parseInt(prompt("Ingresa un numero: "));
    if(mayor == 0 || numero > mayor){
        mayor = numero;
    }
    if(menor == 0 || numero < menor){
        menor = numero;
    }
}

console.log("El mayor es:",mayor);
console.log("El menor es:",menor);