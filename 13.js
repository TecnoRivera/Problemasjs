let multiplo = 0;

for(let i = 1;i <= 100;i++){
    if(i % 2 == 0 || i % 3 == 0){
        console.log(i);
        multiplo++;
    }
}

console.log("Multiplos de 2 o 3:",multiplo);

