let sumaPar = 0;
let sumaImpar = 0;

for(let i = 1;i <= 100;i++){
    console.log(i)
    if(i % 2 == 0){
        sumaPar += i;
    }else{
        sumaImpar += i;
    }
}

console.log("Suma de pares",sumaPar);
console.log("Suma de impares",sumaImpar);