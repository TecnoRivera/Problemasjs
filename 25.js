const prompt = require("prompt-sync")();

let num = prompt("Ingrsa un numero menor a 5000: ");
let num2 = num;

if(num > 5000){
    console.log("Debes ingresar un numero menor a 5000");
}else{
    const romanos = [
        {valor:1000,numeral:'M'},
        {valor:900,numeral:'CM'},
        {valor:500,numeral:'D'},
        {valor:400,numeral:'CD'},
        {valor:100,numeral:'C'},
        {valor:90,numeral:'XC'},
        {valor:50,numeral:'L'},
        {valor:40,numeral:'XL'},
        {valor:10,numeral:'X'},
        {valor:9,numeral:'IX'},
        {valor:5,numeral:'V'},
        {valor:4,numeral:'IV'},
        {valor:1,numeral:'I'}
    ];

    let numeroRomano = '';

    for(let i = 0;i < romanos.length;i++){
        while(num >= romanos[i].valor){
            numeroRomano += romanos[i].numeral;
            num -= romanos[i].valor;
        }
    }

    console.log(`El numero ${num2} en romano es: ${numeroRomano}`);
}