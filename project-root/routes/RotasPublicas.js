const express = require("express");
const AuthController = require("../controllers/AuthController");

const RotasPublicas = express.Router();


RotasPublicas.post('/login', (request, response) => {
    const body = request.body;
    const auth = new AuthController();
    const dados = auth.login(body.login, body.senha);
    if (dados) {
        return response.json({
            token: dados
        })
    }
    return response.json({
        message: "login ou senha incorretos"
    })

})

module.exports = RotasPublicas;