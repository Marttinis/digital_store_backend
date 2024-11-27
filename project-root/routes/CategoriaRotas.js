const express = require("express");
const CategoriaController = require('../controllers/CategoriaController');

const CategoriaRotas = express.Router();

const categoriaController = new CategoriaController();

CategoriaRotas.get('/categoria', categoriaController.listar);
CategoriaRotas.post('/categoria', categoriaController.criar);


module.exports = CategoriaRotas;