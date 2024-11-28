const UsuarioModel = require('../models/UsuariosModel');


class UsuariosController {

    async listar(request, response){
        const dados = await UsuarioModel.findAll();
        return response.json(dados);

    }

    async consultarPorId(request, response){
       
        const id = request.params.id;
        const dados = await UsuarioModel.findByPk(id);
        response.json(dados);

    }

    async criar(request, response){
        const body = request.body;
        await UsuarioModel.create(body);
        return response.status(201).json({
            message:"Usuario cadastrado com sucesso"
        });

    }

    async atualizar(request, response){
       
        const id = request.params.id;
        const body = request.body;
        await UsuarioModel.update(id, body)
        return response.json({
            message:"Usuario atualizado com sucesso"
        });

    }

    deletar(request, response){
     
        const id = request.params.id;
        UsuarioModel.destroy(id);
        return response.status(204).json({
            meesage: 'Usuario removido com sucesso'
        })

    }


}

module.exports = UsuariosController;