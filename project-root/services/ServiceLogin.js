const UsuariosModel = require('../models/UsuariosModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();




class ServiceLogin {
    async authenticate({ email, password }) {
        try {
            // Buscar o usuário pelo e-mail
            const usuario = await UsuariosModel.findOne({ where: { email } });

            // Verificar se o usuário foi encontrado
            if (!usuario) {
                console.error("Usuário não encontrado!");
                throw new Error("Usuário não encontrado");
            }

            // Verificar se a senha é válida
            const senhaValida = await bcrypt.compare(password, usuario.password);
            if (!senhaValida) {
                console.error("Senha inválida!");
                throw new Error("Senha inválida");
            }

            // Retornar dados do usuário (sem expor a senha)
            return { firstname: usuario.firstname, email: usuario.email };
        } catch (error) {
            console.error("Erro na autenticação ServiceLogin:", error.message);
            throw error;
        }
    }
}

module.exports = new ServiceLogin();
