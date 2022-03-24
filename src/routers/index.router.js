// Importamos el framework de Express
const express = require('express')

// Instanciando un router
const router = express.Router()

// Importar Controladores
const usuario_ctr = require("../controllers/usuarios.controller")

// Definicion de los endpoints

const vs = "/api/v1"

router.get(vs + "/usuarios", usuario_ctr.consultarUsuarios)
    .get(vs + "/usuarios/:id", usuario_ctr.consultarUsuario)
    .post(vs + "/usuarios", usuario_ctr.crearUsuario)
    .put(vs + "/usuarios", usuario_ctr.modificarUsuario)
    .delete(vs + "/usuarios", usuario_ctr.eliminarUsuario)





module.exports = router
