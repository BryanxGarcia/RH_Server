const express = require('express');
const cors = require('cors');
const eppTorresRoute = require('./routes/eppTorres');
const eppPostesRoute = require('./routes/eppPostes');
const eppUniformesRoute = require('./routes/uniformes');

const app = express();

 app.use(cors());

 app.use(express.json());

 app.get('/', (req, res) =>{
    res.send('¡Bienvenido!')
 });
 
app.use('/eppPostes', eppPostesRoute);
app.use('/eppTorres', eppTorresRoute);
app.use('/uniformes', eppUniformesRoute);

 const port = 3001;

 app.listen(port, ()=>{
    console.log(`Servidor API en ejecucion en http://localhost:${port}`)
 });