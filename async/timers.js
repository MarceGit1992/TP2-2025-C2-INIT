// Imprimi un "Hola" depues de 2 segundos
// El callback es un funcion que se ejecuta despues de que se cumple el tiempo
function ImprimeHola() {
    console.log("Hola");
}

function ImprimeAdios() {
    i ++;
    if (i === 5) {
        console.log("Deteniendo...");
        //console.log("intervalid dentro", intervalId);
        clearInterval(intervalId);
    }
    console.log("Bye");
}

setTimeout(ImprimeHola, 5000);
//setInterval(ImprimeAdios, 2000);

// solamente quiero que se ejecute 5 veces el bye

let i=0;
const intervalId = setInterval(ImprimeAdios, 2000);
//console.log("intervalid fuera", intervalId);

console.log("Iniciando...");

