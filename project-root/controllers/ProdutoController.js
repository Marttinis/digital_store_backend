const ProdutoModel = require('../models/ProdutoModel');

class ProdutoController{

    async listar(request, response){
        const dados = await ProdutoModel.findAll();
        return response.json(dados);

    }

    async consultarPorId(request, response){
       
        const id = request.params.id;
        const dados = await ProdutoModel.findByPk(id);
        response.json(dados);

    }

    async criar(request, response){
        const body = request.body;
        await ProdutoModel.create(body);
        return response.status(201).json({
            message:"Usuario cadastrado com sucesso"
        });

    }

    async atualizar(request, response){
       
        const id = request.params.id;
        const body = request.body;
        await ProdutoModel.update(id, body)
        return response.json({
            message:"Usuario atualizado com sucesso"
        });

    }

    deletar(request, response){
     
        const id = request.params.id;
        ProdutoModel.destroy(id);
        return response.status(204).json({
            meesage: 'Usuario removido com sucesso'
        })

    }



}

module.exports = ProdutoController;
