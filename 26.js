const prompt = require("prompt-sync")();

const frase = prompt("Ingresa una frase: ");

const espacio = ' '.repeat((process.stdout.columns - frase.length) / 2);
console.log(espacio + frase);