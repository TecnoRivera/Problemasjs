const prompt = require("prompt-sync")();

let numero1 = parseInt(prompt("Ingresa un numero: "));
let numero2 = parseInt(prompt("Ingresa un segundo numero: "));
let contador = 0;
let pares = 0;
let sumaImpares = 0;

console.log("Los numeros que hay entre ambos son: ");
if(numero1 < numero2){
    for(let i = numero1+1;i < numero2;i++){
        console.log(i)
        contador++;
        if(i % 2 == 0){
            pares++;
        }
        if(i % 2 != 0){
            sumaImpares += i;
        }
    }
}else{
    for(let i = numero2+1;i < numero1;i++){
        console.log(i)
        contador++;
        if(i % 2 == 0){
            pares++;
        }
        if(i % 2 != 0){
            sumaImpares += i;
        }
    }
}

console.log("Hay",contador,"numeros");
console.log("Hay",pares,"numeros pares");
console.log("La suma de impares es:",sumaImpares);
