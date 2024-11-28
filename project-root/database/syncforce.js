const connection = require('../config/connection');


require('../models/UsuariosModel')
require('../models/CategoriaModel')
require('../models/ProdutoModel')
require('../models/ImgDoProdutoModel')
require('../models/OpcaoDoProdutoModel')
require('../models/ProdutoCategoriaModel')

connection.sync({force: true})
