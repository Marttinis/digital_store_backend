const express = require("express");
const CategoriaController = require('../controllers/CategoriaController');

const CategoriaRotas = express.Router();

const categoriaController = new CategoriaController();

CategoriaRotas.get('/categoria', categoriaController.listar);

CategoriaRotas.get('/categoria/:id', categoriaController.consultarPorId);

CategoriaRotas.post('/categoria', categoriaController.criar);

CategoriaRotas.put('/categoria/:id', categoriaController.atualizar);

CategoriaRotas.delete('/categoria/:id', categoriaController.deletar);



module.exports = CategoriaRotas;