const {GetCategoria,
    GetCategoriaId,
    PostCategoria,
    PutCategoria,
    DeleteCategoria} = require('../services/ServiceCategoria');


//Listar todos os usuarios
const controllerGetCategoria = (req, res) =>{
    GetCategoria(req, res)
}

//consultar usuario por ID
const controllerGetCategoriaId = (req, res) =>{
    GetCategoriaId(req, res)
}

//criar usuario
const controllerPostCategoria = (req, res) =>{
    PostCategoria(req, res)
}

//atualizar usuario
const controllerPutCategoria = (req, res) =>{
    PutCategoria(req, res)
}

//deletar usuario
const controllerDeleteCategoria = (req, res) =>{
    DeleteCategoria(req, res)
}

module.exports = {
    controllerGetCategoria,
    controllerGetCategoriaId,
    controllerPostCategoria,
    controllerPutCategoria,
    controllerDeleteCategoria
};






