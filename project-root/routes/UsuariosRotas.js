const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware")

const {controllerListar,
    controllerConsultarPorID,
    controllerCriar,
    controllerAtualizar,
    controllerDeletar} = require('../controllers/UsuariosController');


const UsuariosRotas = express.Router();

// const usuariosController = new UsuariosController();

//CRUD
UsuariosRotas.get('/search', (req, res)=>{
    controllerListar(req,res)
})

UsuariosRotas.get('/:id', authMiddleware, (req, res)=>{
    controllerConsultarPorID(req,res)
})

UsuariosRotas.post('/' , (req,res) =>{
    controllerCriar(req,res)
})

UsuariosRotas.put('/:id', authMiddleware, (req,res) =>{
    controllerAtualizar(req,res)
})

UsuariosRotas.delete('/:id', authMiddleware, (req,res) =>{
    controllerDeletar(req,res)
})

module.exports = UsuariosRotas;
