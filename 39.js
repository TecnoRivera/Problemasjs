const pags = 3;
const filas = 4;
const columnas = 5;

let valor = 1;

for(let i = 1;i <= pags;i++){
    console.log("Pagina:",i);
    for(let j = 1;j <= filas;j++){
        let filaa = '';
        for(let k = 1; k <= columnas;k++){
            filaa += valor + '\t';
            valor++;
        }
        console.log(filaa);
    }
    console.log('\n');
}