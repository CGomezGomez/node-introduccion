const express = require('express')
const userRoutes  = express.Router()

const controller  = require('../controllers/users.controller');

userRoutes.get('/' , controller.getUsers);


/* Creat datos */

userRoutes.post('/create' , controller.createUser);

userRoutes.post('/writeNumber' , controller.writeNumber);

/* Enviar datos */

userRoutes.post('/:userId' , controller.getUsersById);



module.exports = userRoutes;

