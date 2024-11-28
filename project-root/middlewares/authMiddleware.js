const jwt = require("jsonwebtoken");
require('dotenv').config();


const authMiddleware = (request,response, next) => {

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

};

module.exports = authMiddleware;

