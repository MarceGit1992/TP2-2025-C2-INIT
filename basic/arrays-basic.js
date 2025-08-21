// ARRAYS

const alumnos = [
  "Juan",
  "Ana",
  "Pedro",
  "Maria",
  "Luis"
];

console.log("Primer alumno:", alumnos[0]); // Juan
console.log("Ultimo alumno:", alumnos[alumnos.length - 1]); // Luis

// Agregar un alumno al final
alumnos.push("Carlos");
console.log("Alumnos después de agregar a Carlos:", alumnos);

// TODO Agregar al inicio
// TODO Extraer el primer alumno
// TODO Extraer del final

// Iterar en un array
for (let i = 0; i < alumnos.length; i++) {
  console.log(`Alumno ${i + 1}:`, alumnos[i]);
}

for (const alumno of alumnos) {
    console.log("Alumno:", alumno);
}

// Nota, estamos usando por primera vez un callback: para el forEach
alumnos.forEach((alumno) => {    
    console.log(`Alumno`, alumno);
})






