const ventas = [
    {representante: 1, mes:1, producto:1, monto:100},
    {representante: 1, mes:1, producto:1, monto:50}
];

const totalVentas = {};

ventas.forEach(venta => {
    if(!totalVentas[venta.mes]){
        totalVentas[venta.mes] = {};
    }
    if(!totalVentas[venta.mes][venta.producto]){
        totalVentas[venta.mes][venta.producto] = 0;
    }
    totalVentas[venta.mes][venta.producto] += venta.monto;
});

console.log(totalVentas);