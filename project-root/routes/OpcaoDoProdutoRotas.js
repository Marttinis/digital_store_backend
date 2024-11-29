const express = require("express");
const OpcaoDoProdutoController = require("../controllers/OpcaoDoProdutoController");


const OpcaoDoProdutoRotas = express.Router();

const opcaoDoProdutoController = new OpcaoDoProdutoController();

OpcaoDoProdutoRotas.get('/imagem', opcaoDoProdutoController.listar);

OpcaoDoProdutoRotas.post('/imagem', opcaoDoProdutoController.criar);


module.exports = OpcaoDoProdutoRotas;