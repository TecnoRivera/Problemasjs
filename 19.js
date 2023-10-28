const fecha = new Date();
let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

const time = horas + ":" + minutos + ":" + segundos;
console.log(time);

const fecha2 = new Date();
const horas2 = fecha2.setHours(10);

console.log(`Hora establecida: ${horas2}`);