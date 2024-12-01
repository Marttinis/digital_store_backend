const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware")

const ProdutoController = require('../controllers/ProdutoController');

const ProdutoRotas = express.Router();

const produtoController = new ProdutoController();

//CRUD
ProdutoRotas.get('/search', produtoController.listar)

ProdutoRotas.get('/:id', authMiddleware, produtoController.consultarPorId)

ProdutoRotas.post('/', authMiddleware, produtoController.criar)

ProdutoRotas.put('/:id', authMiddleware, produtoController.atualizar)

ProdutoRotas.delete('/:id', authMiddleware, produtoController.deletar)

module.exports = ProdutoRotas;
