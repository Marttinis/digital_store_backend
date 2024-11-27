const connection = require('../config/connection');


require('../models/CategoriaModel')
require('../models/ProdutoModel')

connection.sync({force: true})
