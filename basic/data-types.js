// TIPOS DE DATOS EN JAVASCRIPT
// Number, String, Boolean, Null, Undefined, Symbol, BigInt, Object
// javascript es un lenguaje de tipado dinamico, 
// por lo que no es necesario declarar el tipo de dato al momento de crear una variable

//NUMBER
let numero = 42;
let ceronegativo = -0;

// Division por cero
console.log("Division por cero:", 1 / 0);

// Numeros imaginarios
// Raiz cuadrada de un numero negativo
console.log("Raiz cuadrada de -1:", Math.sqrt(-1));

//STRING
let cadena = "Hola, Mundo!";
let cadenaComillaSimple = 'Hola, Mundo!';
// NOTA: En javascript, las llaves se utilizan muchisimo para todo!!
let cadenaBackticks = `Hola, Mundo! ${numero} esto es un numero`; 
let caracter = "a";
let pizza = "🍕";

// NULL
let nulo = null;

// UNDEFINED
let indefinido;

// tipo de pizza
let tipoDePizza = typeof nulo
console.log("Tipo de pizza:", nulo);

// OBJETOS
let usuario = {
    nombre: "Juan",
    edad: 30,
    activo: true,
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Ciudad Imaginaria"
    }
}

// mas adelante vamos a trabajar con JSON. Javascript Object Notation