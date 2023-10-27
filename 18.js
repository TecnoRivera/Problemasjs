const prompt = require("prompt-sync")();

let palabra = prompt("Ingresa una frase o palabra: ");
let letra = prompt("Introduce una letra: ");
let contador = 0;

for(let i = 0;i < palabra.length;i++){
    if(letra == palabra[i]){
        contador++;
    }
}

console.log(`La letra ${letra} aparece ${contador} vez o veces`);