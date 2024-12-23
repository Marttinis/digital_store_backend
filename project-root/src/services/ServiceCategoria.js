const CategoriaModel = require('../models/CategoriaModel');


async function GetCategoria(request, response) {
    const dados = await CategoriaModel.findAll({
        attributes:["name", "slug", "use_in_menu"]
    });
    return response.json(dados);

}

async function GetCategoriaId(request, response) {

    try {
        const id = request.params.id;
        //busca o usuario pela ID
        const dados = await CategoriaModel.findByPk(id, {
            attributes:["name", "slug", "use_in_menu"]
        });

        // Verifica se o usuário foi encontrado
        if (!dados) {
            return response.status(404).json({
                message: "Categoria não encontrada."
            });
        }

        // retorna os dados do usuario
        response.json(dados);


    } catch (error) {
        console.error(error);
        return response.status(500).json({
            message: "Erro ao buscar Categoria",
            error: error.message
        });

    }

}

async function PostCategoria(request, response) {
    try {

        const body = request.body;

        //Validação dos campos
        if (!body.name || !body.slug) {
            return response.status(400).json({
                message: "Todos os campos obrigatórios devem ser preenchidos."
            });
        }

        //Criação da
        await CategoriaModel.create(body);

        return response.status(201).json({
            message: "Categoria cadastrada com sucesso",
          
        });


    } catch (error) {
        console.error(error);
        return response.status(404).json({
            message: "Erro ao cadastrar Categoria",
            error: error.message
        });

    }

}

async function PutCategoria(request, response) {
    try {

        const id = request.params.id;
        const body = request.body;

        //validação dos campos
        if (!body.name || !body.slug) {
            return response.status(400).json({
                message: "Todos os campos obrigatórios devem ser preenchidos corretamente."
            });
        }

        //atualização do cadastro
        const [rowsUpdated] = await CategoriaModel.update(body, { where: { id } })


        // Verificar se o registro foi encontrado
        if (rowsUpdated === 0) {
            return response.status(404).json({
                message: "Categoria não encontrada."
            });
        }

        //retorno de sucesso
        return response.status(204).json();


    } catch (error) {
        console.error(error);
        return response.status(500).json({
            message: "Erro ao atualizar Categoria",
            error: error.message
        });

    }
}


async function DeleteCategoria(request, response) {

    const id = request.params.id;

    try {
        // Tenta excluir o usuário
        const result = await CategoriaModel.destroy({ where: { id } });

        // Se não encontrou nenhum usuário para excluir, retorna erro 404
        if (result === 0) {
            return response.status(404).json({
                message: 'Categoria não encontrada.'
            });
        }

        // Se a exclusão for bem-sucedida, retorna status 204
        return response.status(204).json();

    } catch (error) {
        console.error(error);
        return response.status(500).json({
            message: 'Erro ao tentar remover Categoria',
            error: error.message
        });
    }


}

module.exports = {
    GetCategoria,
    GetCategoriaId,
    PostCategoria,
    PutCategoria,
    DeleteCategoria
}