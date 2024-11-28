const UsuarioModel = require('../models/UsuariosModel');


class UsuariosController {

    async listar(request, response) {
        const dados = await UsuarioModel.findAll();
        return response.json(dados);

    }

    async consultarPorId(request, response) {

        try {
            const id = request.params.id;
            //busca o usuario pela ID
            const dados = await UsuarioModel.findByPk(id);

            // Verifica se o usuário foi encontrado
            if (!dados) {
                return response.status(404).json({
                    message: "Usuário não encontrado."
                });
            }

            // retorna os dados do usuario
            response.json(dados);


        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao buscar Usuário",
                error: error.message
            });

        }

    }

    async criar(request, response) {
        const body = request.body;
        await UsuarioModel.create(body);
        return response.status(201).json({
            message: "Usuario cadastrado com sucesso"
        });

    }

    async atualizar(request, response) {

        const id = request.params.id;
        const body = request.body;
        await UsuarioModel.update(body, { where: { id } })
        return response.json({
            message: "Usuario atualizado com sucesso"
        });

    }

    deletar(request, response) {

        const id = request.params.id;
        UsuarioModel.destroy({ where: { id } });
        return response.status(204).json({
            meesage: 'Usuario removido com sucesso'
        })

    }


}

module.exports = UsuariosController;