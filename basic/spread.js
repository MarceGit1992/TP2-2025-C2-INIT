// El operador spread ... devuelve los elementos de un arryay o un objeto

const tp2a = ["Juan", "Ana", "Pedro"];
const tp2b = ["Maria", "Luis", "Carlos"];

const tp2 = [...tp2a, ...tp2b]; // Combina dos arrays


for (const alumnos of tp2) {
    console.log("Alumno:", alumnos);    
}





