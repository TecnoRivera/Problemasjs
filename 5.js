let contador = 0;

for(let i = 0;i <= 100;i++){
    if(i % 2 != 0){
        console.log(i);
        contador++;
    } 
}

console.log("En total hay",contador,"impares");