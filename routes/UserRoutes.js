const express = require('express');

const router = express.Router();

const {
    addUser,
    authUser
} = require('../controllers/UserController');

// Autenticando un usuario
router.post('/auth', authUser);

//Agregar un usuario nuevo
router.post('/', addUser);

module.exports = router;