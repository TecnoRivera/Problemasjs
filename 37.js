const prompt = require("prompt-sync")();
let cursos = parseInt(prompt("Ingresa el numero de cursos: "));
let alumnos = parseInt(prompt("Ingresa el numero de alumnos: "));
let notasAlumnos = [];

for(let i = 0;i < cursos;i++){
    for(let j = 0;j < alumnos;j++){
        const notas = prompt(`Ingresa la nota del curso ${i+1} del alumno ${j+1}: `);
        notasAlumnos.push(notas);
    }
}