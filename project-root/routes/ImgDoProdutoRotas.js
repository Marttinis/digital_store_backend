const express = require("express");
const ImgDoProdutoController = require("../controllers/ImgDoProdutoController");


const ImgDoProdutoRotas = express.Router();

const imgDoProdutoController = new ImgDoProdutoController();

ImgDoProdutoRotas.get('/imagem', imgDoProdutoController.listar);

ImgDoProdutoRotas.post('/imagem', imgDoProdutoController.criar);


module.exports = ImgDoProdutoRotas;