const UsuarioModel = require("../models/UsuariosModel");

class AuthController {
    login(login, senha){
        const dados = UsuarioModel.authenticate(login, senha);
        console.log(dados);
        
        return dados; 

    }
}

module.exports = AuthController;