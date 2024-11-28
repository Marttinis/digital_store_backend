const express = require("express");
const AuthController = require("../controllers/AuthController");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const RotasPublicas = express.Router();


RotasPublicas.post('/login', async (request, response) => {

    const body = request.body;
    const auth = new AuthController();
    const dados = await auth.login(body);

    if (dados) {
        const token = jwt.sign(dados, process.env.APP_KEY_TOKEN, { expiresIn: '1h' })
        return response.json({
            token: token
        })
    }
    return response.status(401).json({
        message: "login ou senha incorretos"
    })

})

module.exports = RotasPublicas;