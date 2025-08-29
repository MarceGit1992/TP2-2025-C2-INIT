import fs from 'fs/promises';

const path = './inventors.json';

// 1.- Leer el archivo inventors.json de forma asyncrona con promesas
// 2.- TODO Agregar un nuevo inventor
// 3.- TODO Persistir el archivo, incluyendo el nuevo inventor
// 4.- TODO: Eliminar el inventor recien agregado
// 5.- TODO: Persistir el archivo, sin el inventor recien agregado

fs.readFile(path, 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Error leyendo el archivo", err);
    });

console.log("Realizando operaciones ...");