// Estructura de datos en JavaScript: Arrays Avanzados

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 }
  ];

function printInventors(inventors) {
    console.log("Nombre       Apellido   Año de Nacimiento");
    console.log("------------------------------------------------");
    inventors.forEach(inventor => {
        console.log(`${inventor.first.padEnd(12,' ')}${inventor.last.padEnd(12, ' ')}${inventor.year}`);
    });
}

printInventors(inventors);

//console.table(inventors);

// Filtrar inventores nacidos en el siglo XVI
// compacto
printInventors(inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600));

// el formato largo de la función de filtrado
const functionFilrado = function(inventor)  {
    return inventor.year >= 1500 && inventor.year < 1600;
}
printInventors(inventors.filter(functionFilrado));

// Mapear el nombre completo de los inventores
console.table(
    inventors.map(inventor => ({ nombre: inventor.first.toUpperCase(), apellido: inventor.last, year: inventor.year }))
);

// Ordenar inventores por año de nacimiento
console.table(inventors.sort((a, b) => b.year - a.year));

// find
// findIndex
// some
// every
// reduce
// flat
// flatMap