require('dotenv').config(); // Carrega variáveis de ambiente
const app = require("./app"); // Importa a configuração do app

// Configuração do servidor
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`);
});



// //ENDPOINTS
// app.get('/teste/:codigo', (request,response) =>{

//     //QUery
//     const query = request.query;
//     let dados = "Query: " + query.nome + " - " + query.sobrenome

//     //params
//     const params = request.params;
//     dados += "<br> Params: " + params.codigo

//     //Body
//     const body = request.body;
//     dados += "<br> Body: " + JSON.stringify(body);


//     return response.send(dados);
// })
