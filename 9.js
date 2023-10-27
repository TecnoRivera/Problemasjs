const prompt = require("prompt-sync")();

let numero;

numero = prompt("Ingresa un numero: ");

if(numero >= 0){
    console.log("El numero es positivo");
}else{
    console.log("El numero es negativo");
}
