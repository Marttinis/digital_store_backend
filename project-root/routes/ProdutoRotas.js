const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware")

const {controllerGetProdutos,
    controllerGetProdutosId,
    controllerPostProdutos,
    controllerPutProdutos,
    controllerDeleteProdutos}= require('../controllers/ProdutoController');

const ProdutoRotas = express.Router();



//CRUD
ProdutoRotas.get('/search', (req,res) =>{
    controllerGetProdutos(req,res)
})

ProdutoRotas.get('/:id', authMiddleware, (req,res) =>{
    controllerGetProdutosId(req,res)
})

ProdutoRotas.post('/', authMiddleware, (req,res) =>{
    controllerPostProdutos(req,res)
})

ProdutoRotas.put('/:id', authMiddleware, (req,res) =>{
    controllerPutProdutos(req,res)
})

ProdutoRotas.delete('/:id', authMiddleware, (req,res) =>{
    controllerDeleteProdutos(req,res)
})

module.exports = ProdutoRotas;
