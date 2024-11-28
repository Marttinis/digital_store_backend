const express = require("express");
const ProdutoController = require('../controllers/ProdutoController');

const ProdutoRotas = express.Router();

const produtoController = new ProdutoController();

//CRUD
ProdutoRotas.get('/produto', produtoController.listar)

ProdutoRotas.get('/produto/:id', produtoController.consultarPorId)

ProdutoRotas.post('/produto', produtoController.criar)

ProdutoRotas.put('/produto/:id', produtoController.atualizar)

ProdutoRotas.delete('/produto/:id', produtoController.deletar)

module.exports = ProdutoRotas;
