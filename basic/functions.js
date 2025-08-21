// Tipos de declaración de funciones en JavaScript

// forma tradicional
function saludo(nombre) {
    return `Hola, ${nombre}!`;
}   

// funciones anonimas
const square = function(x) {
    return x * x;
}

// funciones flecha (arrow functions)
const squareArrow = (x) => x * x;

const sumar = (a, b) => {   
       
    return a + b;
}

// funciones con parametros por defecto 
function saludarConDefecto(nombre = "invitado") {   
    return `Hola, ${nombre}!`;
}

saludarConDefecto(); // "Hola, invitado!"

// functiciones sin parametros, usando el params
function mostrarMensaje() {
    console.log("Mensaje:", params[0]);
}

mostrarMensaje("Hola, Mundo!", 2);

// En resumen javascript es muy flexible con las funciones, se debe tener cuidado.
// Para evitar muchos de estos errores involuntarios usar TypeScript






