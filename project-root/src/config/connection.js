require("dotenv").config()
const {Sequelize} = require("sequelize");



//conexao com o banco de dados

const connection = new Sequelize({
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})

connection.authenticate()
   .then(() =>{
      console.log('Conexão estabelecida com sucesso.');
   })
   .catch( err =>{
      console.error('Não foi possivel se conectar ao banco de dados', err)
   });

module.exports = connection;