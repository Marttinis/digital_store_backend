const express = require("express");
const UsuariosRotas = require("./UsuariosRotas");
const jwt = require("jsonwebtoken");
require('dotenv').config();




const RotasPrivadas = express.Router();

//middlewere (autenticação de token)
RotasPrivadas.use((request,response, next) => {
    
    let auth = false

    if(request.headers.token){
        const {token} = request.headers;

        try{
            jwt.verify(token, process.env.APP_KEY_TOKEN);
            auth = true;

        } catch(e){
            return response.status(403).send(e);
        }

        
    }

    if (auth === false){
        return response.status(403).send("Não autorizado *-*")
    }
    
    next();

});

RotasPrivadas.use(UsuariosRotas);

module.exports = RotasPrivadas;