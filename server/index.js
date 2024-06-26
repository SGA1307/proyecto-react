const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require("axios")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

// //Solicitamos la conexión a la BD
// const conexion = require('../configDB.js')

// app.get("/todos-los-Usuarios", (req, res) => {
// conexion.connect(function (err) {
// if (err) throw err;
// //Select all customers and return the result object:
// conexion.query("SELECT * FROM sql5716377.usuario", function (err, result, fields) {
// if (err) throw err;
// res.send(result)
// });
// });
// })



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

// server.js
const express = require('express');
const cors = require('cors');
const { registrarUsuario, iniciarSesion } = require('./controllers/userController');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');
// const axios = require('axios');
// const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Rutas para registro y login de usuarios
app.post('/registro', userController.registrarUsuario);
app.post('/login', userController.iniciarSesion);

// Ruta para obtener datos de JSONBin
app.get("/", (req, res) => {
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: 'https://api.jsonbin.io/v3/b/664e418dacd3cb34a84c01ff',
    headers: {
      'Content-Type': 'application/json',
      "X-Master-Key": "$2a$10$BO.PSiIeJnb77KU2UrhWK.q6wORZ43gmh9EuvBrnQV9tPJ/PmLWX."
    }
  };

  axios(config)
    .then(result => {
      res.send(result.data.record);
    })
    .catch(error => {
      console.error('Error fetching data from JSONBin:', error);
      res.status(500).send('Error fetching data');
    });
});

// Servir archivos estáticos desde la aplicación React
app.use(express.static(path.join(__dirname, 'build')));

// Manejar cualquier otra solicitud devolviendo la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
