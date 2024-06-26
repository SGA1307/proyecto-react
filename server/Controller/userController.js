// const fs = require('fs')
// const path = require('path')

// let userFilePath = path.join(__dirname, '../usuariosRegistrados.json')
// let userJSON = fs.readFileSync(userFilePath, 'utf-8')
// let users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'))

// const controller = {
//     register: (req, res) => {
//         let ultimo = users.length
//         let usuarioNuevo = {
//             id: ultimo + 1,
//             nombres: req.body.nombres,
//             apellidos: req.body.apellidos,
//             email: req.body.email,
//             password: req.body.password,
//             fecha_creación: new Date()
//         }

//         let userNuevo
//         if (userJSON === "") { let userNuevo = [] }
//         else { userNuevo = JSON.parse(userJSON) }

//         userNuevo.push(usuarioNuevo)
//         let userAux = JSON.stringify(userNuevo, null, "\t")
//         fs.writeFileSync(userFilePath, userAux)

//     }
// }

// module.exports = controller

// --------------------------------------------------------------------------------------------------------------------------------------------------

// const fs = require('fs').promises;
// const path = require('path');

// const userFilePath = path.join(__dirname, '../../src/componentes/usuariosRegistrados.json');

// const controller = {
//     register: async function (req, res) {
//         try {
//             // Leer el archivo JSON una sola vez
//             const usersData = await fs.readFile(userFilePath, 'utf-8');
//             const users = JSON.parse(usersData);

//             const ultimo = users.length;
//             const usuarioNuevo = {
//                 id: ultimo + 1,
//                 identificacion: req.body.identificacion,
//                 nombres: req.body.nombres,
//                 apellidos: req.body.apellidos,
//                 email: req.body.email,
//                 direccion: req.body.direccion,
//                 telefono: req.body.telefono,
//                 password: req.body.password,
//                 estado: "activo",
//                 fecha_creación: new Date()
//             };

//             for (x of users) {
//                 if (x.email === req.body.email) {
//                     res.status(400).send("El email ya existe")
//                     return
//                 }
//             }

//             users.push(usuarioNuevo);

//             // Escribir el archivo JSON
//             await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));

//             res.status(200).send('Usuario creado con éxito');
//         } catch (error) {
//             console.error('Error al procesar el registro:', error);
//             res.status(500).send('Error interno del servidor');
//         }
//     },

//     login: async function (req, res) {
//         try {
//             const usersData = await fs.readFile(userFilePath, 'utf-8');
//             const users = JSON.parse(usersData);

//             for (x of users) {
//                 if (x.email === req.body.email && x.password === req.body.password) {
//                     res.status(200).send("Ok")
//                     return
//                 }
//             }
//             res.status(400).send('Error')
//         }

//         catch (error) {
//             console.error('Error al procesar el registro:', error);
//             res.status(500).send('Error interno del servidor');
//         }
//     }
// };

// module.exports = controller;

//Código con JSON de usuarios registrados remoto
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());
//const fetch = require('node-fetch')

// const controller = {
//   register: function (req, res) {
//     let config = {
//       method: "GET",
//       maxBodyLength: Infinity,
//       url: "https://api.jsonbin.io/v3/b/664e418dacd3cb34a84c01ff",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Master-Key":
//           "$2a$10$BO.PSiIeJnb77KU2UrhWK.q6wORZ43gmh9EuvBrnQV9tPJ/PmLWX.",
//       },
//     };
//     axios(config).then((result) => {
//       console.log(result.data.record);
//       let id = result.data.record.length + 1;
//       const usuarioNuevo = {
//         id: id,
//         identificacion: req.body.identificacion,
//         nombres: req.body.nombres,
//         apellidos: req.body.apellidos,
//         email: req.body.email,
//         direccion: req.body.direccion,
//         telefono: req.body.telefono,
//         fechaNacimiento: req.body.fechaNacimiento,
//         deptoResidencia: req.body.deptoResidencia,
//         municipioResidencia: req.body.municipioResidencia,
//         password: req.body.password,
//         estado: "activo",
//         rol: "Usuario",
//         fecha_creación: new Date(),
//       };
//       if (result.data.record.length === 0) {
//         result.data.record.push(usuarioNuevo);
//       } else {
//         for (x of result.data.record) {
//           if (x.email === req.body.email) {
//             res.status(400).send("Usuario ya existe en la Base de Datos");
//             return;
//           }
//         }
//         result.data.record.push(usuarioNuevo);
//       }
//       console.log("--->>>", result.data.record);

//       fetch("https://api.jsonbin.io/v3/b/664e418dacd3cb34a84c01ff", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "Application/json",
//           "X-Master-Key":
//             "$2a$10$BO.PSiIeJnb77KU2UrhWK.q6wORZ43gmh9EuvBrnQV9tPJ/PmLWX.",
//         },
//         body: JSON.stringify(result.data.record),
//       })
//         // let configPut = {
//         //   method: "PUT",
//         //   url: "https://json.extendsclass.com/bin/cd70c6c83bc6",
//         //   headers: { "Content-Type": "Application/json", "Security-key": "12345678" },
//         //   body: JSON.stringify(result.data),
//         // }
//         // axios(configPut)
//         .then((response) => {
//           console.log(response.status);
//           if (response.status === 200) {
//             res.status(200).send("ok");
//             return;
//           } else {
//             res.status(400).send("No Ok");
//             return;
//           }
//         });
//     });
//   },
//   login: async function (req, res) {
//     try {
//       // Obtener los datos del JSON remoto
//       const response = await axios.get("https://api.jsonbin.io/v3/b/664e418dacd3cb34a84c01ff", {
//         headers: {
//           "X-Master-Key": "$2a$10$BO.PSiIeJnb77KU2UrhWK.q6wORZ43gmh9EuvBrnQV9tPJ/PmLWX."
//         }
//       });
//       const users = response.data.record;

//       // Verificar las credenciales
//       for (const user of users) {
//         if (user.email === req.body.email && user.password === req.body.password) {
//           return res.status(200).send("Ok");
//         }
//       }

//       // Si no se encontró el usuario con las credenciales proporcionadas
//       return res.status(400).send("Error: Credenciales inválidas");
//     } catch (error) {
//       console.error("Error al procesar el inicio de sesión:", error);
//       return res.status(500).send("Error interno del servidor");
//     }
//   }
// };

// module.exports = controller;


// controllers/userController.js
const mysqlConnection = require('../configBD');

const registrarUsuario = (req, res) => {
  const { identificacion, nombres, apellidos, email, direccion, telefono, password, fecha_creacion } = req.body;
  if (!identificacion || !nombres || !apellidos || !email|| !direccion || !telefono || !password || !fecha_creacion) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const query = 'INSERT INTO usuario (identificacion, nombres, apellidos, email, direccion, telefono, password, fecha_creacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  mysqlConnection.query(query, [identificacion, nombres, apellidos, email, direccion, telefono, password, fecha_creacion],(err, result) => {
    if (err) {
      console.error('Error al registrar usuario en MySQL:', err);
      return res.status(500).json({ error: 'Error al registrar usuario' });
    }
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  });
};

const iniciarSesion = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Correo electrónico y contraseña son obligatorios' });
  }

  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  mysqlConnection.query(query, [email, password], (err, rows) => {
    if (err) {
      console.error('Error al buscar usuario en MySQL:', err);
      return res.status(500).json({ error: 'Error al buscar usuario' });
    }

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado o contraseña incorrecta' });
    }

    const user = rows[0];
    res.json({ message: 'Inicio de sesión exitoso', user });
  });
};

module.exports = { registrarUsuario, iniciarSesion };
