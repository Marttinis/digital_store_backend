const UsuarioModel = require('../models/UsuariosModel');


class UsuariosController {

    listar(request, response){
        
        const dados = UsuarioModel.listar();
        return response.json(dados);

    }

    consultarPorId(request, response){
       
        return UsuarioModel.consultarPorId()

    }

    criar(request, response){
        const body = request.body;
        UsuarioModel.criar(body);
        return response.status(200).json({
            message:"Usuario cadastrado com sucesso"
        });

    }

    atualizar(request, response){
       
        return UsuarioModel.atualizar()

    }

    deletar(request, response){
     
        return UsuarioModel.deletar()

    }


}

module.exports = UsuariosController;