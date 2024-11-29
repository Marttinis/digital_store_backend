const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware")
const UsuariosRotas = require("./UsuariosRotas");
const CategoriaRotas = require("./CategoriaRotas");
const ProdutoRotas = require("./ProdutoRotas");
const ImgDoProdutoRotas = require("./ImgDoProdutoRotas");
const OpcaoDoProdutoRotas = require("./OpcaoDoProdutoRotas");






const RotasPrivadas = express.Router();

//middlewere (autenticação de token)
RotasPrivadas.use(authMiddleware)

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(CategoriaRotas);
RotasPrivadas.use(ProdutoRotas);
RotasPrivadas.use(ImgDoProdutoRotas);
RotasPrivadas.use(OpcaoDoProdutoRotas);


module.exports = RotasPrivadas;