const connection = require('../config/connection');

// Importação dos modelos
require('../../models/UsuariosModel');
require('../../models/CategoriaModel');
require('../../models/ProdutoModel');
require('../../models/ImgDoProdutoModel');
require('../../models/OpcaoDoProdutoModel');
require('../../models/ProdutoCategoriaModel');

async function syncDatabase() {
  try {
    // Desativa as verificações de chave estrangeira
    await connection.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true });

    // Sincroniza o banco de dados com força
    await connection.sync({ force: true })
     .then(()=>{
      console.log('Tabelas sincronizadas com sucesso.');
     })
     .catch(err =>{
      console.log('Erro ao sicronizar tabelas.', err);
     });
    

    // Reativa as verificações de chave estrangeira
    await connection.query('SET FOREIGN_KEY_CHECKS = 1', { raw: true });
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
}

syncDatabase();
