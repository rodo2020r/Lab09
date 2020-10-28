const express = require('express');

const { dbconection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');


//console.log('hola mundo');
//usurio userRamos  contraseña:8jKQ1XsLEnBERyzV
const server = express();
//congifurando cors
server.use(cors());

server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicio REST'
    });
});

dbconection();

//console.log(process.env)
//primera peticion 

server.listen(process.env.PORT, () => {
    console.log('el servidor se esta ejecutando en el puerto:' + 3000),
        console.log('Rodolfo Romario Ramos Inga')
});