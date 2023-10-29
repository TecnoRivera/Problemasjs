const prompt = require("prompt-sync")();
let opc = 0;

do{
    let num = parseInt(prompt("Introduce un numero: "));

    console.log("Que deseas realizar?");
    console.log("1-Comprobar si es primo: ");
    console.log("2-Hallar su factorial: ");
    console.log("3-Imprimir tabla de multiplicar: ");
    console.log("4-Salir: ");
    opc = parseInt(prompt(""));

    switch(opc){
        case 1:
            if(num > 1){
                let esPrimo = true;
                for(let i = 2;i <= Math.sqrt(num);i++){
                    if(num % i == 0){
                        esPrimo = false;
                        break;
                    }
                }
                if(esPrimo){
                    console.log(num + " es primo");
                }else{
                    console.log(num + " no es primo");
                }
            }            
            break;
        case 2:
            let factor;
            factor = factorial(num);
            console.log(`el factorial de ${num} es ${factor}`);
            break;
        case 3:
            console.log("Tabla de multiplicar del",num);
            for(let i = 1;i <= 10;i++){
                console.log(`${num} * ${i} = ${num*i}`);
            }
            break;
        case 4:
            console.log("Has salido");
            break;
    }

}while(opc!=4);


function factorial(num){
    if(num == 0){
        return 1;
    }

    return num *= factorial(num - 1);
}