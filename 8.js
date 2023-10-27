const prompt = require("prompt-sync")();

let palabra = 'S';

while(palabra == 'S' || palabra == 'N'){
    palabra = prompt("Ingresa S o N: ");
}