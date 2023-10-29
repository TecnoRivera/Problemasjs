const prompt = require("prompt-sync")();
let opc = 0;

do{
    let num1 = parseInt(prompt("Introduce un numero: "));
    let num2 = parseInt(prompt("Introduce un segundo numero: "));
    let suma = 0
    let resta = 0;
    let mul = 0;
    let div = 0;

    console.log("Que deseas realizar?");
    console.log("1-Suma: ");
    console.log("2-Resta: ");
    console.log("3-Multiplicacion: ");
    console.log("4-Division: ");
    console.log("5-Salir: ");
    opc = parseInt(prompt(""));

    switch(opc){
        case 1:
            suma = num1 + num2;
            console.log(`La suma es de ${suma}`);
            break;
        case 2:
            resta = num1 - num2;
            console.log(`La resta es de ${resta}`);
            break;
        case 3:
            mul = num1 * num2;
            console.log(`La multiplicacion es de ${mul}`);
            break;
        case 4:
            div = num1 / num2;
            console.log(`La division es de ${div}`);
            break;
        case 5:
            console.log("Has salido");
            break;
    }




}while(opc!=5);