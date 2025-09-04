import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    console.log("Me llego una peticion");
    res.write('Hola Mundo!!');
    res.end();
}).listen(3000, '127.0.0.1', () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
