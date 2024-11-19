const express = require("express");
const UsuariosRotas = require("./UsuariosRotas");
const RotasPrivadas = express.Router();


RotasPrivadas.use((request,response, next) => {
    
    if(request.headers.token !== 'asndui3e23uie23i'){
        return response.status(403).send("Não autorizado *-*");

    }
    
    next();

})

RotasPrivadas.use(UsuariosRotas);

module.exports = RotasPrivadas;