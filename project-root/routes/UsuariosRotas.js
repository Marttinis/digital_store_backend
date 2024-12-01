const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware")

const UsuariosController = require('../controllers/UsuariosController');

const UsuariosRotas = express.Router();

const usuariosController = new UsuariosController();

//CRUD
UsuariosRotas.get('/search', usuariosController.listar)

UsuariosRotas.get('/:id', authMiddleware, usuariosController.consultarPorId)

UsuariosRotas.post('/' , usuariosController.criar)

UsuariosRotas.put('/:id', authMiddleware, usuariosController.atualizar)

UsuariosRotas.delete('/:id', authMiddleware, usuariosController.deletar)

module.exports = UsuariosRotas;
