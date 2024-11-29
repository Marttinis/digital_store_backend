const express = require("express");
const OpcaoDoProdutoController = require("../controllers/OpcaoDoProdutoController");


const OpcaoDoProdutoRotas = express.Router();

const opcaoDoProdutoController = new OpcaoDoProdutoController();

OpcaoDoProdutoRotas.get('/opcao', opcaoDoProdutoController.listar);

OpcaoDoProdutoRotas.post('/opcao', opcaoDoProdutoController.criar);


module.exports = OpcaoDoProdutoRotas;