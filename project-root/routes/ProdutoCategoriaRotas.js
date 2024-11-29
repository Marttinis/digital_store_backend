const express = require("express");
const ProdutoCategoriaController = require("../controllers/ProdutoCategoriaController");


const ProdutoCategoriaRotas = express.Router();

const produtoCategoriaController  = new ProdutoCategoriaController ();

ProdutoCategoriaRotas.get('/opcao', produtoCategoriaController.listar);

ProdutoCategoriaRotas.post('/opcao', produtoCategoriaController.criar);


module.exports = ProdutoCategoriaRotas;