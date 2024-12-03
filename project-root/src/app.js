const express = require("express");
const UsuariosRotas = require("../src/routes/UsuariosRotas");
const LoginRotas = require("../src/routes/LoginRotas");
const ProdutoRotas = require("../src/routes/ProdutoRotas");
const CategoriaRotas = require("../src/routes/CategoriaRotas");
const cors = require('cors');

const app = express();

// Permitir requisições de qualquer origem
app.use(cors());

// Configuração de middlewares globais
app.use(express.json());

// Teste básico de status do servidor
app.get('/', (req, res) => {
    return res.status(200).send("Server está funcionando");
});

// Rotas
app.use('/v1/usuarios', UsuariosRotas)
app.use('/v1/user', LoginRotas)
app.use('/v1/produtos', ProdutoRotas)
app.use('/v1/categorias', CategoriaRotas)

module.exports = app; // Exporta a configuração do app
