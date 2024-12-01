const {listar, consultarPorId, criar, atualizar, deletar } = require('../services/ServiceUsuario');


//Listar todos os usuarios
const controllerListar = (req, res) =>{
    listar(req, res)
}

//consultar usuario por ID
const controllerConsultarPorID = (req, res) =>{
    consultarPorId(req, res)
}

//criar usuario
const controllerCriar = (req, res) =>{
    criar(req, res)
}

//atualizar usuario
const controllerAtualizar = (req, res) =>{
    atualizar(req, res)
}

//deletar usuario
const controllerDeletar = (req, res) =>{
    deletar(req, res)
}

module.exports = {
    controllerListar,
    controllerConsultarPorID,
    controllerCriar,
    controllerAtualizar,
    controllerDeletar
};






