const {getProdutos, getProdutoId, postProduto, putProduto, deleteProduto} = require('../services/ServiceProduto');


//consultar produtos
const controllerGetProdutos = (req, res) =>{
    getProdutos(req,res)
}

//consultar produto por ID
const controllerGetProdutosId = (req, res) =>{
    getProdutoId(req,res)
}

//criar um produto
const controllerPostProdutos = (req, res) =>{
    postProduto(req,res)
}

//atualizar um produto
const controllerPutProdutos = (req, res) =>{
    putProduto(req,res)
}

//deletar um produto
const controllerDeleteProdutos = (req, res) =>{
    deleteProduto(req,res)
}


module.exports = {
    controllerGetProdutos,
    controllerGetProdutosId,
    controllerPostProdutos,
    controllerPutProdutos,
    controllerDeleteProdutos
}