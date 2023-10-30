// 41

const fs = require('fs');
let altas = { ID:1,NOMBRE:"Juan",APELLIDOS:"Perez Rodriguez",DIRECCION:"Colinas del Oriente",ESTADO:"Chihuahua"};
let datos = [];
datos.push(altas);
fs.writeFileSync('DATOS.DAT', JSON.stringify(datos));

// 42

const idBorrar = 1;
const datosAct = JSON.parse(fs.readFileSync('DATOS.DAT','utf8'));
const nuevosDatos = datosAct.filter(registro => registro.ID != idBorrar);
fs.writeFileSync('DATOS.DAT',JSON.stringify(nuevosDatos));

// 43

altas = { ID:1,NOMBRE:"Juan",APELLIDOS:"Perez Rodriguez",DIRECCION:"Colinas del Oriente",ESTADO:"Chihuahua"};
datos = [];
datos.push(altas);
fs.writeFileSync('DATOS.DAT', JSON.stringify(datos));

const idModificar = 1;
const nuevoEstado = "Campeche";
const datosParaModificar = JSON.parse(fs.readFileSync('DATOS.DAT', 'utf8'));
const registroAModificar = datosParaModificar.find(registro => registro.ID === idModificar);
if (registroAModificar) {
  registroAModificar.ESTADO = nuevoEstado;
  fs.writeFileSync('DATOS.DAT', JSON.stringify(datosParaModificar));
}

// 44

const estadoBuscado = "Campeche";
const registros = JSON.parse(fs.readFileSync('DATOS.DAT', 'utf8'));
const registrosFiltrados = registros.filter(registro => registro.ESTADO === estadoBuscado);
console.log('Registros con estado Campeche:', registrosFiltrados);

// 45

fs.writeFileSync('DATOS_JSON.json', JSON.stringify(registros));
const datosJson = JSON.parse(fs.readFileSync('DATOS_JSON.json', 'utf8'));
const idAConsultar = 1;
const registroConsultado = datosJson.find(registro => registro.ID === idAConsultar);
console.log('Registro con ID 1:', registroConsultado || "Registro no encontrado");

