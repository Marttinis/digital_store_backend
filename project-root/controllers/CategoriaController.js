const CategoriaModel = require('../models/CategoriaModel')

class CategoriaController{

    async listar(request, response){
        const dados = await CategoriaModel.findAll();
        return response.json(dados);

    }

    async criar(request, response){
        const body = request.body;
        await CategoriaModel.create(body)
        return response.status(201).json({
            message:"Categoria adicionada com sucesso"
        });

    }
}

module.exports = CategoriaController;