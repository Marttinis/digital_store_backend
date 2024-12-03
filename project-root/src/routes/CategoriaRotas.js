const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware")

const {controllerGetCategoria,
    controllerGetCategoriaId,
    controllerPostCategoria,
    controllerPutCategoria,
    controllerDeleteCategoria} = require('../controllers/CategoriaController');

const CategoriaRotas = express.Router();



CategoriaRotas.get('/search', (req,res)=>{
    controllerGetCategoria(req,res)
});

CategoriaRotas.get('/:id', authMiddleware,(req,res)=>{
    controllerGetCategoriaId(req,res)
});

CategoriaRotas.post('/', authMiddleware, (req,res)=>{
    controllerPostCategoria(req,res)
});

CategoriaRotas.put('/:id', authMiddleware, (req,res)=>{
    controllerPutCategoria(req,res)
});

CategoriaRotas.delete('/:id', authMiddleware, (req,res)=>{
    controllerDeleteCategoria(req,res)
});



module.exports = CategoriaRotas;