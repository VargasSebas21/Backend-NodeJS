
// Controlador de usuarios

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const crearUsuario = (req, res) => {
    res.send("Crear usuario")

    
}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const eliminarUsuario = (req, res) => {
    res.send("Eliminar Usuario")
}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const modificarUsuario = (req, res) => {
    res.send("Modificar Usuario")
}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
 const consultarUsuario = (req, res) => {
    res.send("Consultar Usuario")

 }    
 /**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
  const consultarUsuarios = (req, res) => {
    res.send("Consultar Usuarios")
  }
  module.exports= {
      crearUsuario,
      modificarUsuario,
      eliminarUsuario,
      consultarUsuario,
      consultarUsuarios
      


  }    