const matriz = [];

for(let i = 0;i < 4;i++){
    const fila = [];
    for(let j = 0;j < 5;j++){
        fila.push(Math.floor(Math.random() * 100) + 1);
    }
    matriz.push(fila);
}

for(let i = 0;i < matriz.length;i++){
    console.log(matriz[i].join("\t"));
}