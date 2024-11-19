const UsuarioModel = require('../models/UsuariosModel');


class UsuariosController {

    listar(request, response){
        
        const dados = UsuarioModel.listar();
        return response.json(dados);

    }

    consultarPorId(request, response){
       
        const id = request.params.id;
        const dados =  UsuarioModel.consultarPorId(id);
        response.json(dados);

    }

    criar(request, response){
        const body = request.body;
        UsuarioModel.criar(body);
        return response.status(201).json({
            message:"Usuario cadastrado com sucesso"
        });

    }

    atualizar(request, response){
       
        const id = request.params.id;
        const body = request.body;
        UsuarioModel.atualizar(id, body)
        return response.json({
            message:"Usuario atualizado com sucesso"
        });

    }

    deletar(request, response){
     
        const id = request.params.id;
        UsuarioModel.deletar(id);
        return response.json({
            meesage: 'Usuario removido com sucesso'
        })

    }


}

module.exports = UsuariosController;