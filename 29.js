let sumaDiez = 0;

for(let i = 1;i <= 100;i++){
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    if((dado1 + dado2) == 10){
        sumaDiez++;
    }
}

console.log(`Las veces que entre los dos dados suman 10 es: ${sumaDiez}`);
