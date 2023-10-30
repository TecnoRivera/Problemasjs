const fs = require('fs');

const altas = { ID:1,NOMBRE:"Juan",APELLIDOS:"Perez Rodriguez",DIRECCION:"Colinas del Oriente",ESTADO:"Chihuahua"};

let datos = [];

datos.push(altas);

fs.writeFileSync('DATOS.DAT', JSON.stringify(datos));
