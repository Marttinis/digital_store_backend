const express = require('express');

const host = 'localhost';
const port = 3000;


const app = express();

app.get('/', (request,response) =>{
    return response.status(200).send("Ola seu viado")
})

app.get('/produtos', (request, response) =>{
    return response.status(200).send("tá aqui teus produtos")

})

app.listen(port, host, ()=>{
    console.log(`Servidor executando em http://${host}:${port}`);
    
})