// Importamos el framework de Express

const express = require('express')
// Instanciar la aplicacion de Express
const app = express()

// Integrando el router con la app
const router = require("./routers/index.router")
app.use(router)


// Puerto donde se levanta el servidor web ()
// Puerto donde esta escuchando la API
const PORT = 3000

//levantar la API que estara escuchando en el puerto 3000
// 1. Primer Parametro: Puerto
// 2. Segundo Parametro: CallBack
app.listen(PORT, () => {
  console.log(`API escuchando en: https://localhost:${PORT}`)
})