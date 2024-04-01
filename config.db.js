const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', 
    user:'root',
    password: 'root',
    database: 'rh_formularios',
})

connection.connect((error) => {
    if(error){
        console.error('Error al conectar con la base de datos', error);
    }else{
        console.log('Conexion a la base de datos establecida correctamente')
    }

});

module.exports = connection;