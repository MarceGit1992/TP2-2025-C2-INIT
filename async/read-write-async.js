import fs from 'fs';

const path = './inventors.json';

fs.readFile(path, 'utf-8', callback);
console.log("Leyendo el archivo...");

function callback(err, data) {
  if (err) {
    console.log("Error leyendo el archivo", err);
    return;
  }
  console.log(data);
}