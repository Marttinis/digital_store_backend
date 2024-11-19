const express = require("express");
const UsuariosRotas = require('./routes/UsuariosRotas');

const host = 'localhost';
const port = 3000;


const app = express();
app.use(express.json());

app.get('/', (request,response) =>{
    return response.status(200).send("Server está funcinonado")
})

app.use(UsuariosRotas);

//ENDPOINTS
app.get('/teste/:codigo', (request,response) =>{

    //QUery
    const query = request.query;
    let dados = "Query: " + query.nome + " - " + query.sobrenome

    //params
    const params = request.params;
    dados += "<br> Params: " + params.codigo

    //Body
    const body = request.body;
    dados += "<br> Body: " + JSON.stringify(body);


    return response.send(dados);
})

app.listen(port, host, ()=>{
    console.log(`Servidor executando em http://${host}:${port}`);
    
})