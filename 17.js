let contador = 0;
let suma = 0;
let num1 = 1;
let num2 = 10;

for(let i = num1;i <= num2;i++){
    if(i % 2 == 0){
        console.log(i);
        contador++;
        suma += i;
    }
}

console.log("Hay",contador,"numeros");
console.log("La suma de los numeros es de",suma);