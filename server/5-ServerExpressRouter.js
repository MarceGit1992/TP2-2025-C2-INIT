import express from 'express';

const port = 3000;

const inventors = [
    { _id: 1, first: 'Albert', last: 'Einstein', year: 1879 },
    { _id: 2, first: 'Isaac', last: 'Newton', year: 1643 },
    { _id: 3, first: 'Galileo', last: 'Galilei', year: 1564 },
    { _id: 4, first: 'Marie', last: 'Curie', year: 1867 },
    { _id: 5, first: 'Johannes', last: 'Kepler', year: 1571 },
    { _id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { _id: 7, first: 'Max', last: 'Planck', year: 1858 },
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
    
    // ordenar por apellido
    const parametro = req.query.sort;
    res.json(inventors.sort((a, b) => {
            if(a[parametro] < b[parametro]) return -1;
            if(a[parametro] > b[parametro]) return 1;
            return 0;
        })
    );
});

// ruta para un inventor en particular
app.get('/api/inventors/:id', (req, res) => {
    const { id } = req.params;
    const inventor = inventors.find(inventor => inventor._id === parseInt(id));
    if (!inventor) {
        return res.status(404).json({ message: 'Inventor not found' });
    }
    res.json(inventor);
});

app.listen(port, () => {
    console.log(`Servidor  corriendo en http://localhost:${port}`);
});
