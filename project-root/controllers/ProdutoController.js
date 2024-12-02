const connection = require('../config/connection')
const ProdutoModel = require('../models/ProdutoModel');
const CategoriaModel = require('../models/CategoriaModel');
const ImgDoProdutoModel = require('../models/ImgDoProdutoModel');
const OpcaoDoProdutoModel = require('../models/OpcaoDoProdutoModel');
const ProdutoCategoriaModel = require('../models/ProdutoCategoriaModel');



ProdutoModel.hasMany(ImgDoProdutoModel, { foreignKey: "product_id", as: "imagens" })
ProdutoModel.hasMany(OpcaoDoProdutoModel, { foreignKey: "product_id", as: "opcao" })
ProdutoModel.belongsToMany(CategoriaModel, {
    through: ProdutoCategoriaModel,
    foreignKey: "product_id",
    otherKey: "category_id",
    as: 'categorias'

});


class ProdutoController {

    async listar(request, response) {
        //relação do produto com a imagem do produto
        //o hasone informa que o produto tem uma imagem e informa que tem uma chave instrangeira


        //o include inclui as informações da tabela de imagens do produto
        const dados = await ProdutoModel.findAll({
            attributes: ["name", "slug", "stock", "description", "price", "price_with_discount"],
            include: [
                { model: ImgDoProdutoModel, as: 'imagens' , attributes: ["enabled" , "path"]  },
                { model: OpcaoDoProdutoModel, as: 'opcao' , attributes:["title", "shape", "radius", "type", "values"] },
                { model: CategoriaModel, as: "categorias" , attributes:["name", "slug"]}
            ],
            



        });
        return response.json(dados);

    }

    async consultarPorId(request, response) {

        try {



            const id = request.params.id;
            //busca o usuario pela ID
            const dados = await ProdutoModel.findByPk(id, {
                attributes: ["name", "slug", "stock", "description", "price", "price_with_discount"],
                include: [
                    { model: ImgDoProdutoModel, as: "imagens", attributes: ["enabled" , "path"] },
                    { model: OpcaoDoProdutoModel, as: 'opcao', attributes:["title", "shape", "radius", "type", "values"] },
                    { model: CategoriaModel, as: "categorias", attributes:["name", "slug"]}

                ],


            });

            // Verifica se o usuário foi encontrado
            if (!dados) {
                return response.status(404).json({
                    message: "produto não encontrado."
                });
            }

            // retorna os dados do produto
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
            const {categoria, ...body}  = request.body;

            //Validação dos campos
            if (!body.name || !body.slug || !body.price || !body.price_with_discount) {
                return response.status(400).json({
                    message: "Todos os campos obrigatórios devem ser preenchidos."
                });
            }

            let produto = await ProdutoModel.create(body, { 
                include:[
                    {model: ImgDoProdutoModel, as: "imagens"},
                    {model: OpcaoDoProdutoModel, as: "opcao"},
                    {through: ProdutoCategoriaModel, model: CategoriaModel, as: "categorias"}

            ] });

            produto.setCategorias(categoria)

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

        const transaction = await connection.transaction(); // Iniciar transação
        try {
            const id = request.params.id;
            const {imagens, opcao, categorias, ...body } = request.body;
    
            // Validação dos campos obrigatórios
            if (!body.name || !body.slug || !body.price || !body.price_with_discount) {
                return response.status(400).json({
                    message: "Todos os campos obrigatórios devem ser preenchidos corretamente."
                });
            }
    
            // Atualizar produto
            const produto = await ProdutoModel.update(body,{ where: { id }, transaction });
    
            if (!produto[0]) {
                await transaction.rollback();
                return response.status(404).json({ message: "Produto não encontrado." });
            }
    
            // Atualizar imagens relacionadas
            if (imagens && imagens.length > 0) {
                for (const img of imagens) {
                    await ImgDoProdutoModel.update(
                        { enabled: img.enabled, path: img.path },
                        { where: { product_id: id, id: img.id }, transaction }
                    );
                }
            }
           
    
            // Atualizar opções relacionadas
            if (opcao && opcao.length > 0) {
                for (const option of opcao) {
                    await OpcaoDoProdutoModel.update(
                        {title: option.title, shape: option.shape, radius: option.radius, type: option.type, values: option.values},  
                        {where: { product_id: id, id: option.id }, transaction}
                    );
                }
            }
    
       
            // Finalizar transação
            await transaction.commit();
    
            // Retorno de sucesso
            return response.status(204).json({
                message: "Produto e associações atualizados com sucesso."
            });
    
        } catch (error) {
            await transaction.rollback(); // Reverter alterações no caso de erro
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