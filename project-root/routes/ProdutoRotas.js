const express = require("express");
const ProdutoController = require('../controllers/ProdutoController');

const ProdutoRotas = express.Router();

const produtoController = new ProdutoController();

//CRUD
ProdutoRotas.get('/users', produtoController.listar)

ProdutoRotas.get('/users/:id', produtoController.consultarPorId)

ProdutoRotas.post('/users', produtoController.criar)

ProdutoRotas.put('/users/:id', produtoController.atualizar)

ProdutoRotas.delete('/users/:id', produtoController.deletar)

module.exports = ProdutoRotas;
