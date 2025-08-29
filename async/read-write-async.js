import fs from 'fs';

const path = './inventors.json';

// 1.- Leer el archivo inventors.json de forma asyncrona
// 2.- Agregar un nuevo inventor
// 3.- Persistir el archivo, incluyendo el nuevo inventor
// 4.- TODO: Eliminar el inventor recien agregado
// 5.- TODO: Persistir el archivo, sin el inventor recien agregado


fs.readFile(path, 'utf-8', (err, data)=> {
    if (err) {
        console.log("Error leyendo el archivo", err);
    return;
  }
    const inventor = {
        first: "Juan",
        last: "Perez",
        year: 2024
    };
    const inventors = JSON.parse(data);
    inventors.push(inventor);

    fs.writeFile(path, JSON.stringify(inventors, null, " "), 'utf-8', (err) => {
        if(err) {
            console.log("Error escribiendo el archivo", err);
            return;
        }
        console.log("Archivo escrito correctamente");
    }
  );});

console.log("Realizando operaciones ...");