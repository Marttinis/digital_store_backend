const ImgDoProdutoModel = require('../models/ImgDoProdutoModel');

class ImgDoProdutoController {

    //listar as img dos produtos
    async listar(request, response) {
        const dados = await ImgDoProdutoModel.findAll();
        return response.json(dados);

    }


    async criar(request, response) {
        try {

            const body = request.body;

            //Validação dos campos
            if (!body.product_id || !body.path) {
                return response.status(400).json({
                    message: "Todos os campos obrigatórios devem ser preenchidos."
                });
            }

            
            await ImgDoProdutoModel.create(body);

            return response.status(200).json({
                message: "Imagem do produto cadastrado com sucesso",
              
            });


        } catch (error) {
            console.error(error);
            return response.status(404).json({
                message: "Erro ao cadastrar imagem do produto",
                error: error.message
            });

        }

    }


}

module.exports = ImgDoProdutoController;