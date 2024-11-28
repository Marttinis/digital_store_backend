const express = require("express");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const UsuariosRotas = require("./UsuariosRotas");
const CategoriaRotas = require("./CategoriaRotas");
const ProdutoRotas = require("./ProdutoRotas");





const RotasPrivadas = express.Router();

//middlewere (autenticação de token)
RotasPrivadas.use((request,response, next) => {
    return next();//lembra de apagar isso aqui depois
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
        return response.status(403).send("Não autorizado")
    }
    
    next();

});

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(CategoriaRotas);
RotasPrivadas.use(ProdutoRotas);


module.exports = RotasPrivadas;