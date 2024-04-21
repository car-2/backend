const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.json());

const database = require('./databases/database');
const tipoR = require('./routes/tipoR');
const directorR = require('./routes/directorR');
const mediaR = require('./routes/mediaR');
const generoR = require('./routes/generoR');
const producerR = require('./routes/producerR');


async function principal(){ 
    await app.listen(process.env.PORT);
    console.log(`Express conectado en el puerto ${process.env.PORT}`);
}

app.get('/', (req, res) => {
    res.send(`Express conectado en el puerto ${process.env.PORT}`);
});

app.use(cors(
    origin = "http://localhost:5173"
));

app.use('/tipo', tipoR);
app.use('/director', directorR);
app.use('/media', mediaR);
app.use('/genero', generoR);
app.use('/productora', producerR);

principal();