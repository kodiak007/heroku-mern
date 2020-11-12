const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//crear el servidor 
const app = express();

//conectar a la DB
conectarDB();

//habilitar cors
app.use(cors());

//habilitar expresss.json permite leer datos que el usuario coloque
app.use(express.json({ extended: true}));

//puerto de la APP
const PORT = process.env.PORT || 8000;

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));


//arrancar la app
app.listen(PORT, () =>{
console.log(`El servidor esta funcionado en el puerto ${PORT} `);

});