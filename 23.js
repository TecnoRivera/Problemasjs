const filas = 10;
const coulmnas = 10;
contador = 0;

for(let i = 0;i < filas;i++){
    let fila = "";
    for(let j = 0;j < coulmnas;j++){
        if(contador <= 100){
            fila += contador + "\t";
            contador++;
        }
    }
    console.log(fila);
}

console.log("100");