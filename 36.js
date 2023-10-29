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

const transpuesta = [];

console.log("Matriz transpuesta");

for(let i = 0;i < matriz[0].length;i++){
    const filaTranspuesta = [];
    for(let j = 0;j < matriz.length;j++){
        filaTranspuesta.push(matriz[j][i]);
    }
    transpuesta.push(filaTranspuesta);
}

for(let i = 0;i < transpuesta.length;i++){
    console.log(transpuesta[i].join("\t"));
}