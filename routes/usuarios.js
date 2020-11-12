const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');

//crea un usuario
// api/usuarios
router.post( '/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe de ser minimo de 8 caracteres').isLength({min:8})
    ],
    usuarioController.crearUsuario
);
module.exports = router;