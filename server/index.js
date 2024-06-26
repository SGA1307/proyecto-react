const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require("axios")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

//Solicitamos la conexión a la BD
const conexion = require('./configDB/configDB.js')

app.get("/todos-los-Usuarios", (req, res) => {
conexion.connect(function (err) {
if (err) throw err;
//Select all customers and return the result object:
conexion.query("SELECT * FROM sql5716377.usuario", function (err, result, fields) {
if (err) throw err;
res.send(result)
});
});
})

// app.get("/", (req, res) => {
//     let config = {
//         method:"GET",
//         maxBodyLength: Infinity,
//         url: 'https://api.jsonbin.io/v3/b/664e418dacd3cb34a84c01ff',
//         headers: {
//             'Content-type': 'application/json',
//             "X-Master-key": "$2a$10$BO.PSiIeJnb77KU2UrhWK.q6wORZ43gmh9EuvBrnQV9tPJ/PmLWX."
//         }
//     };
//     axios(config)
//     .then(result =>{
//         res.send(result.data.record)
//     }) 
// });

const user = require ("./Controller/userController")
app.use('/registro-usuario',user.register)
app.use('/login',user.login)


const PORT = 3001
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto ", PORT)
})