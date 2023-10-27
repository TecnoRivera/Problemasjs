const prompt = require("prompt-sync")();

let numero;

numero = prompt("Ingresa un numero: ");

if(numero % 2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}
