const express = require("express");
const LoginController = require("../controllers/LoginController");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const ServiceLogin = express.Router();


ServiceLogin.post('/login', async (request, response) => {

    const body = request.body;
    const auth = new LoginController();
    const dados = await auth.login(body);

    if (dados) {
        const token = jwt.sign(dados, process.env.APP_KEY_TOKEN, { expiresIn: '1h' })
        return response.status(200).json({
            token: token
        })
    }
    return response.status(401).json({
        message: "login ou senha incorretos"
    })

})

module.exports = ServiceLogin;