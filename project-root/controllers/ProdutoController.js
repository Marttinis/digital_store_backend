const ProdutoModel = require('../models/ProdutoModel');
const ImgDoProdutoModel = require('../models/ImgDoProdutoModel');
const OpcaoDoProdutoModel = require('../models/OpcaoDoProdutoModel');


ProdutoModel.hasMany(ImgDoProdutoModel, { foreignKey: "product_id", as: "imagens" })
ProdutoModel.hasOne(OpcaoDoProdutoModel, { foreignKey: "product_id", as: "opcao" })


class ProdutoController {

    async listar(request, response) {
        //relação do produto com a imagem do produto
        //o hasone informa que o produto tem uma imagem e informa que tem uma chave instrangeira


        //o include inclui as informações da tabela de imagens do produto
        const dados = await ProdutoModel.findAll({
            include: [
                { model: ImgDoProdutoModel, as: 'imagens' },
                { model: OpcaoDoProdutoModel, as: 'opcao' },
            ],



        });
        return response.json(dados);

    }

    async consultarPorId(request, response) {

        try {



            const id = request.params.id;
            //busca o usuario pela ID
            const dados = await ProdutoModel.findByPk(id, {
                include: [
                    { model: ImgDoProdutoModel, as: "imagens" },
                    { model: OpcaoDoProdutoModel, as: 'opcao' },

                ],


            });

            // Verifica se o usuário foi encontrado
            if (!dados) {
                return response.status(404).json({
                    message: "produto não encontrado."
                });
            }

            // retorna os dados do usuario
            response.json(dados);


        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao buscar Produto",
                error: error.message
            });

        }

    }

    async criar(request, response) {
        try {

            //Criando o produto junto com a imagem
            const body = request.body;

            //Validação dos campos
            if (!body.name || !body.slug || !body.price || !body.price_with_discount) {
                return response.status(400).json({
                    message: "Todos os campos obrigatórios devem ser preenchidos."
                });
            }

            await ProdutoModel.create(body, { 
                include:[
                    {model: ImgDoProdutoModel, as: "imagens"}

            ] });

            return response.status(200).json({
                message: "Produto cadastrado com sucesso",

            });


        } catch (error) {
            console.error(error);
            return response.status(404).json({
                message: "Erro ao cadastrar Produto",
                error: error.message
            });

        }

    }

    async atualizar(request, response) {
        try {

            const id = request.params.id;
            const body = request.body;

            //validação dos campos
            if (!body.name || !body.slug || !body.price || !body.price_with_discount) {
                return response.status(400).json({
                    message: "Todos os campos obrigatórios devem ser preenchidos corretamente."
                });
            }

            //atualização do cadastro
            const [rowsUpdated] = await ProdutoModel.update(body, { where: { id } })


            // Verificar se o registro foi encontrado
            if (rowsUpdated === 0) {
                return response.status(404).json({
                    message: "Produto não encontrado."
                });
            }

            //retorno de sucesso
            return response.status(204).json();


        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: "Erro ao atualizar Produto",
                error: error.message
            });

        }
    }

    async deletar(request, response) {

        const id = request.params.id;

        try {
            // Tenta excluir o usuário
            const result = await ProdutoModel.destroy({ where: { id } });

            // Se não encontrou nenhum usuário para excluir, retorna erro 404
            if (result === 0) {
                return response.status(404).json({
                    message: 'Produto não encontrado.'
                });
            }

            // Se a exclusão for bem-sucedida, retorna status 204
            return response.status(204).json();

        } catch (error) {
            console.error(error);
            return response.status(500).json({
                message: 'Erro ao tentar remover Produto',
                error: error.message
            });
        }


    }
}

module.exports = ProdutoController;