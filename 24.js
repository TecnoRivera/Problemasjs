const numero = 11;

if(numero > 1){
    let esPrimo = true;
    for(let i = 2;i <= Math.sqrt(numero);i++){
        if(numero % i == 0){
            esPrimo = false;
            break;
        }
    }

    if(esPrimo){
        console.log(numero + " es primo");
    }else{
        console.log(numero + " no es primo");
    }
}

