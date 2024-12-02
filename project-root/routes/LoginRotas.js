const express = require("express");
const LoginController = require("../controllers/LoginController");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const LoginRotas = express.Router();


LoginRotas.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body;
        
        // Validar se os campos foram fornecidos
        if (!email || !password) {
            return response.status(400).json({ message: "Email e senha são obrigatórios" });
        }

        const auth = new LoginController();
        const dados = await auth.login({ email, password });

        const token = jwt.sign(dados, process.env.APP_KEY_TOKEN, { expiresIn: '3h' });

        return response.status(200).json({ token });
    } catch (error) {
        console.error("Erro no login:", error.message);
        return response.status(401).json({ message: "Login ou senha incorretos" });
    }
});


module.exports = LoginRotas;