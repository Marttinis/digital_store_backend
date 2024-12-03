const UsuariosModel = require('../models/UsuariosModel');
const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken");
require('dotenv').config();





 async function Autenticar (req, res){
    try {
        const { email, password } = req.body;
        // Buscar o usuário pelo e-mail
        const usuario = await UsuariosModel.findOne({ where: { email } });

        // Verificar se o usuário foi encontrado
        if (!usuario) {
            return res.status(401).json({ message: 'Email invalido'});
        }

        // Verificar se a senha é válida
        const senhaValida = await bcrypt.compare(password, usuario.password);
        if (!senhaValida) {
            return res.status(401).json({ message: 'senha inválida' })
        }

        //caso senha esteja correta, gera o token de acesso
        const token = jwt.sign({ firstname: usuario.firstname, email: usuario.email }, process.env.APP_KEY_TOKEN, { expiresIn: '3h' });
        res.status(200).json(
            {
                message: 'Login realizado com sucesso',
                token: token
            })



    } catch (error) {
        res.status(500).json({ message: 'Erro ao fazer login' })
    }
}


module.exports = Autenticar;
