// 1.- Leer el archivo inventors.json de forma asyncrona
// 2.- Agregar un nuevo inventor
// 3.- Persistir el archivo, incluyendo el nuevo inventor
// 4.- TODO: Eliminar el inventor recien agregado
// 5.- TODO: Persistir el archivo, sin el inventor recien agregado
// 6.- TODO: Actualizar el inventor recien agregado (cambiar el año a 2020)

import fs from 'fs/promises';
const path = './inventors.json';
const newInventor = {
    first: "Anna",
    last: "Fernandez",
    year: 2020
};

async function getInventors() {
    return fs.readFile(path, 'utf-8');
}

async function addInventor(inventors) {
    inventors.push(newInventor);
    fs.writeFile(path, JSON.stringify(inventors, null, " "), 'utf-8');
    return inventors;
}

const inventors = JSON.parse(await getInventors()); 

const conNuevoInventor = await addInventor(inventors);

console.log(conNuevoInventor);