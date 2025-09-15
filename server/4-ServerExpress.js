import express from 'express';

const port = 3000;

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];


const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Inventors</title>
        </head>
        <body>
            <h1>Home Inventors</h1>
        </body>
        </html>
        `
    );
});

app.get('/api/inventors', (req, res) => {
    res.json(inventors);
});


app.listen(port, () => {
    console.log(`Servidor  corriendo en http://localhost:${port}`);
});
