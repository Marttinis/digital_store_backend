const Autenticar = require("../services/ServiceLogin");

const LoginController = (req,res) =>{
    Autenticar(req,res)
}

module.exports = LoginController;
