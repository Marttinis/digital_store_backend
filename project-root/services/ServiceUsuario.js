const UsuarioModel = require('../models/UsuariosModel');

//Connsultar usuarios
async function listar(request, response) {
    const dados = await UsuarioModel.findAll({
        attributes: ["firstname", "surname", "email"] 
    });
    return response.json(dados);

}

//Consultar por ID
async function consultarPorId(request, response) {

    try {
        const id = request.params.id;
        //busca o usuario pela ID
        const dados = await UsuarioModel.findByPk(id, {
           attributes: ["firstname", "surname", "email"] 
        });

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

// criação de usuario
async function criar(request, response) {
    try {

        const body = request.body;

        //Validação dos campos
        if (!body.firstname || !body.surname || !body.email || !body.password) {
            return response.status(400).json({
                message: "Todos os campos obrigatórios devem ser preenchidos."
            });
        }

        //Criação do usuario
        await UsuarioModel.create(body);

        return response.status(201).json({
            message: "Usuario cadastrado com sucesso",
            
        });


    } catch (error) {
        console.error(error);
        return response.status(404).json({
            message: "Erro ao cadastrar Usuário",
            error: error.message
        });

    }

}

//Atualizar um usuario
async function atualizar(request, response) {
    try {

        const id = request.params.id;
        const body = request.body;

        //validação dos campos
        if (!body.firstname || !body.surname || !body.email || !body.password) {
            return response.status(400).json({
                message: "Todos os campos obrigatórios devem ser preenchidos corretamente."
            });
        }

        //atualização do cadastro
        const [rowsUpdated] = await UsuarioModel.update(body, { where: { id } })


        // Verificar se o registro foi encontrado
        if (rowsUpdated === 0) {
            return response.status(404).json({
                message: "Usuário não encontrado."
            });
        }

        //retorno de sucesso
        return response.status(204).json();


    } catch (error) {
        console.error(error);
        return response.status(500).json({
            message: "Erro ao atualizar Usuário",
            error: error.message
        });

    }
}


async function deletar(request, response) {

    const id = request.params.id;

    try {
        // Tenta excluir o usuário
        const result = await UsuarioModel.destroy({ where: { id } });

        // Se não encontrou nenhum usuário para excluir, retorna erro 404
        if (result === 0) {
            return response.status(404).json({
                message: 'Usuário não encontrado.'
            });
        }

        // Se a exclusão for bem-sucedida, retorna status 204
        return response.status(204).json();

    } catch (error) {
        console.error(error);
        return response.status(500).json({
            message: 'Erro ao tentar remover usuário',
            error: error.message
        });
    }


}

module.exports = {
    listar,
    consultarPorId,
    criar,
    atualizar,
    deletar
};