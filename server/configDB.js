const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: ' sql5.freemysqlhosting.net',
    user: 'sql5716377',
    password: 'hedAzYMY7h',
    database: 'sql5716377',
    port: 3306,
})

connection.connect((error) => {
    if (!error) 
        {console.log("conexion exitosa")}
    else{ console.log("conexion fallida")
    }
})

module.exports = connection