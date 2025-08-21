// Operadores de igualdad y desigualdad

console.log("1 == '1':", 1 == '1'); // true, porque compara valor
console.log("1 === '1':", 1 === '1'); // false, porque compara valor y tipo

console.log(0 == false); // true, porque 0 es falsy

// valores falsy
// false, 0, "", null, undefined, NaN

const usuario = {
    nombre: "Juan",
    edad: 30
};

if(usuario){
    console.log("El usuario existe");
} else {
    console.log("El usuario no existe");
}

if(10) {
    console.log("10 es un valor verdadero");
}



