const prompt = require("prompt-sync")();

let palabra = prompt("Ingresa una frase: ");

for(let i = 1;i <= 5;i++){
    let push = " ".repeat(i * 4);
    console.log(push + palabra);
}