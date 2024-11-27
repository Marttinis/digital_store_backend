const CategoriaModel = require('../models/CategoriaModel')

class CategoriaController{

    async listar(request, response){
        const dados = await CategoriaModel.findAll();
        return response.json(dados);

    }

    criar(request, response){
        const body = request.body;
        CategoriaModel.create(body)
        return response.status(201).json({
            message:"Categoria cadastrada com sucesso"
        });

    }
}

module.exports = CategoriaController;