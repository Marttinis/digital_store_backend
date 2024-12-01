const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware")

const CategoriaController = require('../controllers/CategoriaController');

const CategoriaRotas = express.Router();

const categoriaController = new CategoriaController();

CategoriaRotas.get('/search', categoriaController.listar);

CategoriaRotas.get('/:id', authMiddleware, categoriaController.consultarPorId);

CategoriaRotas.post('/', authMiddleware, categoriaController.criar);

CategoriaRotas.put('/:id', authMiddleware, categoriaController.atualizar);

CategoriaRotas.delete('/:id', authMiddleware, categoriaController.deletar);



module.exports = CategoriaRotas;