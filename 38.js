let matriz = [
    [10, 5, 4, 3],
    [3, 2, 6, 8],
    [5, 4, 3, 2],
    [1, 4, 6, 8]
  ];
  
  const filas = matriz.length;
  
  for (let i = Math.floor(filas / 2); i > 0; i = Math.floor(i / 2)) {
    for (let j = i; j < filas; j++) {
      const temp = matriz[j];
      let k = j;
      while (k >= i && matriz[k - i][0] > temp[0]) {
        for (let l = 0; l < matriz[j].length; l++) {
          let swap = matriz[k][l];
          matriz[k][l] = matriz[k - i][l];
          matriz[k - i][l] = swap;
        }
        k -= i;
      }
    }
  }
  
  for (let i = 0; i < filas; i++) {
    console.log(matriz[i].join("\t"));
  }