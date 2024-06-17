const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5714458',
    password: 'AzcPKEmDzN',
    database: 'sql5714458',
    port: 3306,
})

connection.connect((error) => {
    if (!error) 
        {console.log("conexion exitosa")}
    else{ console.log("conexion fallida")
    }
})

module.exports = connection