// Desestructuracion de objetos y arrays

const ususario = {
    nombre: "Juan",
    edad: 30,
    activo: true,
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Ciudad Imaginaria"
    }
};

// const nombre = ususario.nombre;
// const edad = ususario.edad;
// const direccionCiudad = ususario.direccion.ciudad;

const {nombre, edad, direccion} = ususario;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", direccion.ciudad); // undefined

// Desestructuracion de arrays
const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, tercera, cuarto] = numeros; // saltar el tercer elemento