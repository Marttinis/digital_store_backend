const express = require("express");
const RotasPrivadas = require("./routes/RotasPrivadas");
const RotasPublicas = require("./routes/RotasPublicas");

const app = express();

// Configuração de middlewares globais
app.use(express.json());

// Teste básico de status do servidor
app.get('/', (req, res) => {
    return res.status(200).send("Server está funcionando");
});

// Rotas públicas e privadas
app.use(RotasPublicas);
app.use(RotasPrivadas);

module.exports = app; // Exporta a configuração do app
